/**
 * DEALERSHIP LIVE SALES - OPERATING SYSTEM
 * Version 4.5: Dual-Mode Architecture & Universal In-Browser Script Editor
 * Mode A: Cold Call Teleprompter (Outbound Dealership Dials, 3-Beat Pacing, Objection Cards)
 * Mode B: C.L.O.S.E.R. Sales Meeting (15-Min Discovery Engine, Reactive Bleed Math, Closing Frame)
 */

(function () {
  'use strict';

  // =========================================================================
  // STATE MANAGEMENT
  // =========================================================================
  const state = {
    mode: 'coldcall', // 'coldcall' | 'closer' | 'cbfleads'
    coldcallSubmode: 'first_touch', // 'first_touch' | 'followup'
    isRitualActive: false,
    activeBlockIndex: 0,
    fontBasePx: 18, // Max zoom-out level on start
    isPanic: false,
    isEditing: false,
    isSidebarCollapsed: false,
    blocks: [],
    objections: [],
    
    // Math Inputs (Closer Mode)
    math: {
      monthlyApps: 50,
      declineRate: 50,
      declinedUnits: 25,
      avgMargin: 20000,
      recoveredUnits: 5,
      monthlyBleed: 500000,
      annualBleed: 6000000,
      recoveredRevenue: 100000
    },

    // Timer State (Closer Mode - Timestamp-driven)
    timer: {
      totalDurationMs: 15 * 60 * 1000, // 15 minutes
      isRunning: false,
      startedAt: null,
      elapsedMs: 0,
      timerId: null,
      lastRPressTime: 0
    },

    // Active Objection Slot
    activeObjectionId: null
  };

  // =========================================================================
  // FORMATTING HELPERS
  // =========================================================================
  function formatRand(val) {
    if (isNaN(val) || val === null || val === undefined) return 'R 0';
    const num = Math.round(val);
    return 'R ' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  function formatTime(ms) {
    const isNegative = ms < 0;
    const absMs = Math.abs(ms);
    const totalSecs = Math.floor(absMs / 1000);
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    const str = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    return isNegative ? `+${str}` : str;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function escapePreservingFormatting(str) {
    if (!str) return '';
    const tokenMap = [];
    const tokenized = str.replace(/<\/?(span|mark|b|i|u)(?:\s+style="[^"]*")?(?:\s+class="[^"]*")?>/gi, match => {
      const key = `___TAG_${tokenMap.length}___`;
      tokenMap.push({ key, match });
      return key;
    });

    let escaped = tokenized
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    tokenMap.forEach(item => {
      escaped = escaped.replace(item.key, item.match);
    });

    return escaped;
  }

  function cleanRichContent(html) {
    if (!html) return '';
    let clean = html
      .replace(/<div[^>]*><br\s*\/?><\/div>/gi, '\n')
      .replace(/<div[^>]*>/gi, '\n')
      .replace(/<\/div>/gi, '')
      .replace(/<br\s*\/?>/gi, '\n');

    clean = clean.replace(/<(?!\/?(?:span|mark|b|i|u)\b)[^>]+>/gi, '');
    clean = clean.replace(/^\n+/, '').replace(/\n+$/, '');
    clean = clean.replace(/<span[^>]*>\s*<\/span>/gi, '');
    return clean;
  }

  // =========================================================================
  // DUAL-MODE SCRIPT LOADING & STORAGE
  // =========================================================================
  function getCurrentSubKey() {
    if (state.mode === 'coldcall' && state.coldcallSubmode === 'followup') {
      return 'coldcall_followup';
    }
    return state.mode;
  }

  function getMasterBlocks(mode) {
    if (typeof SCRIPT_DATA === 'undefined') return [];
    const subKey = getCurrentSubKey();
    if (SCRIPT_DATA[subKey] && SCRIPT_DATA[subKey].blocks) {
      return SCRIPT_DATA[subKey].blocks;
    }
    if (SCRIPT_DATA[mode] && SCRIPT_DATA[mode].blocks) {
      return SCRIPT_DATA[mode].blocks;
    }
    return SCRIPT_DATA.blocks || [];
  }

  function getMasterObjections(mode) {
    if (typeof SCRIPT_DATA === 'undefined') return [];
    const subKey = getCurrentSubKey();
    if (SCRIPT_DATA[subKey] && SCRIPT_DATA[subKey].objections) {
      return SCRIPT_DATA[subKey].objections;
    }
    if (SCRIPT_DATA[mode] && SCRIPT_DATA[mode].objections) {
      return SCRIPT_DATA[mode].objections;
    }
    return SCRIPT_DATA.objections || [];
  }

  const SCRIPT_SCHEMA_VERSION = '5.4';

  function loadDataForCurrentMode() {
    try {
      if (localStorage.getItem('dealership_cockpit_schema_ver') !== SCRIPT_SCHEMA_VERSION) {
        localStorage.removeItem('dealership_cockpit_blocks_coldcall');
        localStorage.removeItem('dealership_cockpit_blocks_coldcall_followup');
        localStorage.removeItem('dealership_cockpit_blocks_closer');
        localStorage.removeItem('dealership_cockpit_blocks_cbfleads');
        localStorage.removeItem('dealership_cockpit_objs_coldcall');
        localStorage.removeItem('dealership_cockpit_objs_coldcall_followup');
        localStorage.removeItem('dealership_cockpit_objs_closer');
        localStorage.removeItem('dealership_cockpit_objs_cbfleads');
        localStorage.setItem('dealership_cockpit_schema_ver', SCRIPT_SCHEMA_VERSION);
      }
    } catch (e) {}

    // Load Pre-Call Ritual from Local Storage
    try {
      const savedPrecall = localStorage.getItem('dealership_cockpit_precall');
      if (savedPrecall && typeof SCRIPT_DATA !== 'undefined') {
        SCRIPT_DATA.precall = JSON.parse(savedPrecall);
      }
    } catch (e) {}

    // Load Blocks
    const currentKey = getCurrentSubKey();
    const blockStorageKey = 'dealership_cockpit_blocks_' + currentKey;
    const masterBlocks = getMasterBlocks(state.mode);
    try {
      const savedBlocks = localStorage.getItem(blockStorageKey);
      if (savedBlocks) {
        state.blocks = JSON.parse(savedBlocks);
      } else {
        state.blocks = JSON.parse(JSON.stringify(masterBlocks));
      }
    } catch (e) {
      state.blocks = JSON.parse(JSON.stringify(masterBlocks));
    }

    // Load Objections
    const objStorageKey = 'dealership_cockpit_objs_' + currentKey;
    const masterObjs = getMasterObjections(state.mode);
    try {
      const savedObjs = localStorage.getItem(objStorageKey);
      if (savedObjs) {
        state.objections = JSON.parse(savedObjs);
        masterObjs.forEach(mo => {
          if (!state.objections.some(o => o.id === mo.id)) {
            state.objections.push(JSON.parse(JSON.stringify(mo)));
          }
        });
      } else {
        state.objections = JSON.parse(JSON.stringify(masterObjs));
      }
    } catch (e) {
      state.objections = JSON.parse(JSON.stringify(masterObjs));
    }
  }

  function saveBlocksLocally() {
    try {
      const currentKey = getCurrentSubKey();
      const storageKey = 'dealership_cockpit_blocks_' + currentKey;
      localStorage.setItem(storageKey, JSON.stringify(state.blocks));
      if (typeof SCRIPT_DATA !== 'undefined' && SCRIPT_DATA[currentKey]) {
        SCRIPT_DATA[currentKey].blocks = state.blocks;
      }
    } catch (e) {}
  }

  function saveObjectionsLocally() {
    try {
      const currentKey = getCurrentSubKey();
      const storageKey = 'dealership_cockpit_objs_' + currentKey;
      localStorage.setItem(storageKey, JSON.stringify(state.objections));
      if (typeof SCRIPT_DATA !== 'undefined' && SCRIPT_DATA[currentKey]) {
        SCRIPT_DATA[currentKey].objections = state.objections;
      }
    } catch (e) {}
  }

  // =========================================================================
  // TELEPROMPTER RENDERING
  // =========================================================================
  const scriptStage = document.getElementById('script-stage');
  const viewport = document.getElementById('teleprompter-viewport');

  function isBlockCustomEdited(block) {
    if (block._isCustomEdited) return true;
    const master = getMasterBlocks(state.mode);
    const defaultBlock = master.find(b => b.id === block.id);
    if (!defaultBlock) return false;
    return (
      (defaultBlock.text || '').trim() !== (block.text || '').trim() ||
      (defaultBlock.cue || '').trim() !== (block.cue || '').trim() ||
      (defaultBlock.stageNote || '').trim() !== (block.stageNote || '').trim() ||
      (defaultBlock.phaseName || '').trim() !== (block.phaseName || '').trim() ||
      (defaultBlock.section || '').trim() !== (block.section || '').trim()
    );
  }

  function renderScript() {
    scriptStage.innerHTML = '';
    const master = getMasterBlocks(state.mode);

    state.blocks.forEach((block, index) => {
      const blockEl = document.createElement('section');
      blockEl.className = 'script-block';
      blockEl.id = `block-${block.id}`;
      blockEl.dataset.index = index;

      if (index === state.activeBlockIndex) {
        blockEl.classList.add('active');
      }

      const defaultBlock = master.find(b => b.id === block.id);
      if (isBlockCustomEdited(block)) {
        blockEl.classList.add('is-custom-edited');
      }

      // Meta header: Phase & Section (Fully Editable)
      const metaEl = document.createElement('div');
      metaEl.className = 'block-meta';
      
      const phaseSpan = document.createElement('span');
      phaseSpan.className = 'block-phase';
      if (state.isEditing) {
        phaseSpan.contentEditable = 'true';
        phaseSpan.spellcheck = false;
        phaseSpan.innerText = block.phaseName || ('PHASE ' + block.phase);
        phaseSpan.title = "Click to edit stage title";
        phaseSpan.addEventListener('input', () => {
          block.phaseName = phaseSpan.innerText;
          block._isCustomEdited = true;
          blockEl.classList.add('is-custom-edited');
          saveBlocksLocally();
        });
      } else {
        phaseSpan.textContent = block.phaseName || ('PHASE ' + block.phase);
      }

      const sectionSpan = document.createElement('span');
      sectionSpan.className = 'block-section';
      if (state.isEditing) {
        sectionSpan.contentEditable = 'true';
        sectionSpan.spellcheck = false;
        sectionSpan.innerText = block.section || '';
        sectionSpan.title = "Click to edit section title";
        sectionSpan.addEventListener('input', () => {
          block.section = sectionSpan.innerText;
          block._isCustomEdited = true;
          blockEl.classList.add('is-custom-edited');
          saveBlocksLocally();
        });
      } else {
        sectionSpan.textContent = block.section || '';
      }

      metaEl.appendChild(phaseSpan);
      metaEl.appendChild(sectionSpan);
      if (isBlockCustomEdited(block)) {
        const customTag = document.createElement('span');
        customTag.className = 'custom-edit-tag';
        customTag.textContent = 'Custom Edited';
        metaEl.appendChild(customTag);
      }
      blockEl.appendChild(metaEl);

      // Main spoken text (Fully Editable)
      const textEl = document.createElement('div');
      textEl.className = 'block-text';
      
      if (state.isEditing) {
        textEl.contentEditable = 'true';
        textEl.spellcheck = false;
        if (/(Thompson|Receptionist)/i.test(block.text || '')) {
          textEl.innerHTML = renderEditableDialogue(block.text || '');
        } else {
          textEl.innerHTML = escapePreservingFormatting(block.text || '').replace(/\n/g, '<br>');
        }
        textEl.title = "Click to edit spoken script. Highlight text to change color or add background highlight.";
        textEl.addEventListener('input', () => {
          block.text = cleanRichContent(textEl.innerHTML);
          block._isCustomEdited = true;
          blockEl.classList.add('is-custom-edited');
          saveBlocksLocally();
        });
        textEl.addEventListener('blur', () => {
          if (state.isEditing && /(Thompson|Receptionist)/i.test(block.text || '')) {
            textEl.innerHTML = renderEditableDialogue(block.text || '');
          }
        });
      } else {
        textEl.innerHTML = renderDialogue(formatBlockTextWithDiff(block.text || '', defaultBlock ? defaultBlock.text : null));
      }
      blockEl.appendChild(textEl);

      // Cue (Fully Editable)
      if (block.cue || state.isEditing) {
        const cueEl = document.createElement('div');
        cueEl.className = 'cue-container';
        const cueText = document.createElement('div');
        cueText.className = 'cue-text';
        if (state.isEditing) {
          cueText.contentEditable = 'true';
          cueText.spellcheck = false;
          cueText.innerText = block.cue || '';
          cueText.title = "Click to edit prospect cue";
          cueText.addEventListener('input', () => {
            block.cue = cueText.innerText;
            block._isCustomEdited = true;
            blockEl.classList.add('is-custom-edited');
            saveBlocksLocally();
          });
        } else {
          cueText.innerHTML = `👂 ${formatBlockTextWithDiff(block.cue || '', defaultBlock ? defaultBlock.cue : null)}`;
        }
        cueEl.appendChild(cueText);
        blockEl.appendChild(cueEl);
      }

      // Stage Note (Fully Editable)
      if (block.stageNote || state.isEditing) {
        const noteEl = document.createElement('div');
        noteEl.className = 'stage-note';
        noteEl.innerHTML = `<span>🎯</span> `;
        const noteSpan = document.createElement('span');
        if (state.isEditing) {
          noteSpan.contentEditable = 'true';
          noteSpan.spellcheck = false;
          noteSpan.innerText = block.stageNote || '';
          noteSpan.title = "Click to edit tactical note";
          noteSpan.addEventListener('input', () => {
            block.stageNote = noteSpan.innerText.replace(/^\[|\]$/g, '');
            block._isCustomEdited = true;
            blockEl.classList.add('is-custom-edited');
            saveBlocksLocally();
          });
        } else {
          noteSpan.innerHTML = `[${formatBlockTextWithDiff(block.stageNote || '', defaultBlock ? defaultBlock.stageNote : null)}]`;
        }
        noteEl.appendChild(noteSpan);
        blockEl.appendChild(noteEl);
      }

      // Click to activate block
      blockEl.addEventListener('click', () => {
        if (!state.isEditing) {
          setActiveBlock(index);
        }
      });

      // Double-click to instantly enter edit mode
      blockEl.addEventListener('dblclick', () => {
        if (!state.isEditing) {
          toggleEditMode(true);
        }
      });

      scriptStage.appendChild(blockEl);
    });
  }

  function interpolateTokens(text) {
    let html = escapePreservingFormatting(text);
    html = html.replace(/\{\{monthly_apps\}\}/g, `<span class="token" data-token="monthly_apps">${state.math.monthlyApps}</span>`);
    html = html.replace(/\{\{decline_rate\}\}/g, `<span class="token" data-token="decline_rate">${state.math.declineRate}%</span>`);
    html = html.replace(/\{\{declined_units\}\}/g, `<span class="token" data-token="declined_units">${state.math.declinedUnits}</span>`);
    html = html.replace(/\{\{avg_margin\}\}/g, `<span class="token" data-token="avg_margin">${formatRand(state.math.avgMargin)}</span>`);
    html = html.replace(/\{\{monthly_bleed\}\}/g, `<span class="token" data-token="monthly_bleed">${formatRand(state.math.monthlyBleed)}</span>`);
    html = html.replace(/\{\{annual_bleed\}\}/g, `<span class="token" data-token="annual_bleed">${formatRand(state.math.annualBleed)}</span>`);
    html = html.replace(/\{\{recovered_units\}\}/g, `<span class="token" data-token="recovered_units">${state.math.recoveredUnits}</span>`);
    html = html.replace(/\{\{recovered_revenue\}\}/g, `<span class="token" data-token="recovered_revenue">${formatRand(state.math.recoveredRevenue)}</span>`);
    return html;
  }

  function formatBlockTextWithDiff(currentText, originalText) {
    if (!currentText) return '';
    if (!originalText || currentText.trim() === originalText.trim()) {
      return interpolateTokens(currentText);
    }

    const origTokens = originalText.split(/(\s+)/);
    const newTokens = currentText.split(/(\s+)/);
    const N = origTokens.length;
    let prefixCount = 0;
    while (prefixCount < newTokens.length && prefixCount < N && newTokens[prefixCount] === origTokens[prefixCount]) {
      prefixCount++;
    }

    let suffixCount = 0;
    while (
      suffixCount < (newTokens.length - prefixCount) &&
      suffixCount < (N - prefixCount) &&
      newTokens[newTokens.length - 1 - suffixCount] === origTokens[N - 1 - suffixCount]
    ) {
      suffixCount++;
    }

    const prefix = newTokens.slice(0, prefixCount).join('');
    const changed = newTokens.slice(prefixCount, newTokens.length - suffixCount).join('');
    const suffix = newTokens.slice(newTokens.length - suffixCount).join('');

    let result = interpolateTokens(prefix);
    if (changed.length > 0) {
      result += `<span class="custom-word-added">${interpolateTokens(changed)}</span>`;
    }
    result += interpolateTokens(suffix);
    return result;
  }

  function renderEditableDialogue(text) {
    if (!text) return '';
    const lines = text.split('\n');
    return lines.map(line => {
      const trimmed = line.trim();
      if (!trimmed) return '<div><br></div>';
      if (/^Scenario/i.test(trimmed)) {
        return `<div class="edit-dialogue-line edit-scenario">${escapePreservingFormatting(line)}</div>`;
      }
      if (/^Receptionist/i.test(trimmed)) {
        return `<div class="edit-dialogue-line edit-receptionist">${escapePreservingFormatting(line)}</div>`;
      }
      if (/^Thompson/i.test(trimmed)) {
        return `<div class="edit-dialogue-line edit-thompson">${escapePreservingFormatting(line)}</div>`;
      }
      return `<div class="edit-dialogue-line">${escapePreservingFormatting(line)}</div>`;
    }).join('');
  }

  function renderDialogue(html) {
    if (!html || !/(Thompson|Receptionist)/i.test(html)) return html;

    const lines = html.split('\n');
    let result = [];
    let currentSpeaker = null;
    let currentContent = [];

    function flush() {
      if (currentSpeaker) {
        const isRecept = currentSpeaker.toLowerCase().includes('receptionist');
        const cls = isRecept ? 'speaker-receptionist' : 'speaker-thompson';
        const tagCls = isRecept ? 'tag-receptionist' : 'tag-thompson';
        const icon = isRecept ? '📞' : '👤';
        result.push(`<div class="dialogue-row ${cls}"><span class="speaker-tag ${tagCls}">${icon} ${currentSpeaker}</span><div class="speaker-speech">${currentContent.join('<br>')}</div></div>`);
        currentSpeaker = null;
        currentContent = [];
      } else if (currentContent.length) {
        result.push(currentContent.join('<br>'));
        currentContent = [];
      }
    }

    for (let line of lines) {
      const trimmed = line.trim();
      if (!trimmed) {
        flush();
        continue;
      }

      const plain = trimmed.replace(/<[^>]+>/g, '').trim();

      if (/^Scenario\s+\d+/i.test(plain)) {
        flush();
        result.push(`<div class="scenario-label">${trimmed}</div>`);
        continue;
      }

      const speakerMatch = plain.match(/^(Thompson(?:\s*\([^)]+\))?|Receptionist(?:\s*\([^)]+\))?)\s*:\s*(.*)$/i);
      if (speakerMatch) {
        flush();
        const speakerRaw = speakerMatch[1];
        const colonIdx = trimmed.indexOf(':');
        const speechPart = colonIdx !== -1 ? trimmed.substring(colonIdx + 1).trim() : '';
        currentSpeaker = speakerRaw;
        if (speechPart) {
          currentContent.push(speechPart);
        }
        continue;
      }

      if (currentSpeaker) {
        currentContent.push(trimmed);
      } else {
        currentContent.push(trimmed);
      }
    }
    flush();
    return result.join('\n');
  }

  function setActiveBlock(index) {
    if (index < 0 || index >= state.blocks.length) return;
    state.activeBlockIndex = index;

    const blocks = scriptStage.querySelectorAll('.script-block');
    blocks.forEach((el, idx) => {
      el.classList.toggle('active', idx === index);
    });

    const activeEl = blocks[index];
    if (activeEl) {
      scrollBlockToWebcamEyeLine(activeEl);
    }
  }

  function scrollBlockToWebcamEyeLine(blockEl) {
    if (state.mode === 'coldcall') {
      blockEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      return;
    }
    const eyeLineOffset = window.innerHeight * 0.28;
    const blockRect = blockEl.getBoundingClientRect();
    const viewportRect = viewport.getBoundingClientRect();
    const currentScrollTop = viewport.scrollTop;
    const targetScrollTop = currentScrollTop + (blockRect.top - viewportRect.top) - eyeLineOffset;
    viewport.scrollTo({ top: Math.max(0, targetScrollTop), behavior: 'smooth' });
  }

  function stepBlock(direction) {
    const nextIdx = state.activeBlockIndex + direction;
    if (nextIdx >= 0 && nextIdx < state.blocks.length) {
      setActiveBlock(nextIdx);
    }
  }

  function jumpToPhase(phaseNumber) {
    const idx = state.blocks.findIndex(b => b.phase === phaseNumber);
    if (idx !== -1) {
      setActiveBlock(idx);
    }
  }

  // =========================================================================
  // CARDS (OBJECTION BATTLECARDS) RENDERING & FULL INLINE EDITING
  // =========================================================================
  const fixedObjSlot = document.getElementById('fixed-objection-slot');
  const objSlotTitle = document.getElementById('obj-slot-title');
  const objSlotClose = document.getElementById('obj-slot-close');
  const objSlotSummary = document.getElementById('obj-slot-summary');
  const objSlotScript = document.getElementById('obj-slot-script');

  function showObjection(objId) {
    const objs = (state.objections && state.objections.length) ? state.objections : getMasterObjections(state.mode);
    const obj = objs.find(o => o.id === objId);
    if (!obj) return;

    state.activeObjectionId = objId;

    if (state.isEditing) {
      objSlotTitle.contentEditable = 'true';
      objSlotTitle.spellcheck = false;
      objSlotTitle.innerText = obj.title;
      objSlotTitle.title = "Click to edit objection title";
      objSlotTitle.oninput = () => {
        obj.title = objSlotTitle.innerText;
        saveObjectionsLocally();
        renderObjectionButtons();
      };

      objSlotSummary.contentEditable = 'true';
      objSlotSummary.spellcheck = false;
      objSlotSummary.innerText = obj.bulletSummary || '';
      objSlotSummary.title = "Click to edit battlecard summary";
      objSlotSummary.oninput = () => {
        obj.bulletSummary = objSlotSummary.innerText;
        saveObjectionsLocally();
      };

      objSlotScript.contentEditable = 'true';
      objSlotScript.spellcheck = false;
      objSlotScript.innerHTML = escapePreservingFormatting(obj.repScript || '').replace(/\n/g, '<br>');
      objSlotScript.title = "Click to edit response script. Highlight text to change color or add background highlight.";
      objSlotScript.oninput = () => {
        obj.repScript = cleanRichContent(objSlotScript.innerHTML);
        saveObjectionsLocally();
      };
    } else {
      objSlotTitle.contentEditable = 'false';
      objSlotTitle.textContent = obj.title;
      objSlotTitle.oninput = null;

      objSlotSummary.contentEditable = 'false';
      objSlotSummary.textContent = obj.bulletSummary || '';
      objSlotSummary.oninput = null;

      objSlotScript.contentEditable = 'false';
      objSlotScript.innerHTML = escapePreservingFormatting(obj.repScript || '').replace(/\n/g, '<br>');
      objSlotScript.oninput = null;
    }

    fixedObjSlot.classList.add('visible');
    fixedObjSlot.scrollTop = 0;

    document.querySelectorAll('.obj-btn').forEach(btn => {
      btn.classList.toggle('active-obj', btn.dataset.objId === objId);
    });
  }

  function dismissObjection() {
    state.activeObjectionId = null;
    fixedObjSlot.classList.remove('visible');
    document.querySelectorAll('.obj-btn').forEach(btn => btn.classList.remove('active-obj'));
  }

  objSlotClose.addEventListener('click', dismissObjection);

  function moveObjectionUp(index) {
    const objs = (state.objections && state.objections.length) ? state.objections : getMasterObjections(state.mode);
    if (index <= 0 || index >= objs.length) return;
    const temp = objs[index];
    objs[index] = objs[index - 1];
    objs[index - 1] = temp;
    state.objections = objs;
    saveObjectionsLocally();
    renderObjectionButtons();
  }

  function moveObjectionDown(index) {
    const objs = (state.objections && state.objections.length) ? state.objections : getMasterObjections(state.mode);
    if (index < 0 || index >= objs.length - 1) return;
    const temp = objs[index];
    objs[index] = objs[index + 1];
    objs[index + 1] = temp;
    state.objections = objs;
    saveObjectionsLocally();
    renderObjectionButtons();
  }

  function renderObjectionButtons() {
    const container = document.getElementById('objection-triggers-container');
    if (!container) return;
    const objs = (state.objections && state.objections.length) ? state.objections : getMasterObjections(state.mode);

    container.innerHTML = `
      <div style="font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">
        Cards
      </div>
    `;

    objs.forEach((obj, index) => {
      const row = document.createElement('div');
      row.className = 'obj-item-row';

      const btn = document.createElement('button');
      btn.className = 'obj-btn';
      if (state.activeObjectionId === obj.id) {
        btn.classList.add('active-obj');
      }
      btn.dataset.objId = obj.id;

      const isFirst = index === 0;
      const isLast = index === objs.length - 1;

      btn.innerHTML = `
        <span class="obj-btn-title">${escapeHtml(obj.title)}</span>
        <div class="obj-btn-actions">
          <button class="obj-reorder-btn btn-move-up" title="Move card up" ${isFirst ? 'disabled' : ''}>▲</button>
          <button class="obj-reorder-btn btn-move-down" title="Move card down" ${isLast ? 'disabled' : ''}>▼</button>
          <span class="hotkey-badge">${escapeHtml(obj.triggerKey)}</span>
        </div>
      `;

      const upBtn = btn.querySelector('.btn-move-up');
      if (upBtn) {
        upBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          moveObjectionUp(index);
        });
      }

      const downBtn = btn.querySelector('.btn-move-down');
      if (downBtn) {
        downBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          moveObjectionDown(index);
        });
      }

      btn.addEventListener('click', () => {
        if (state.activeObjectionId === obj.id) {
          dismissObjection();
        } else {
          showObjection(obj.id);
        }
      });
      row.appendChild(btn);

      // In edit mode, add a delete button for the objection card
      if (state.isEditing) {
        const delBtn = document.createElement('button');
        delBtn.className = 'btn-obj-delete';
        delBtn.innerHTML = '✕';
        delBtn.title = `Delete card "${obj.title}"`;
        delBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (confirm(`Delete objection card "${obj.title}"?`)) {
            objs.splice(index, 1);
            state.objections = objs;
            saveObjectionsLocally();
            if (state.activeObjectionId === obj.id) {
              dismissObjection();
            }
            renderObjectionButtons();
          }
        });
        row.appendChild(delBtn);
      }

      container.appendChild(row);
    });

    // In edit mode, add a button to add a new objection card
    if (state.isEditing) {
      const btnAddObj = document.createElement('button');
      btnAddObj.className = 'btn-add-obj';
      btnAddObj.id = 'btn-add-objection';
      btnAddObj.innerHTML = '＋ Add Objection Card';
      btnAddObj.addEventListener('click', () => {
        const newObj = {
          id: 'obj-' + state.mode + '-' + Date.now(),
          triggerKey: '?',
          label: 'New Card',
          title: 'New Objection Card',
          bulletSummary: 'Summary of how to counter this objection...',
          repScript: 'Verbatim rebuttal script goes here.'
        };
        objs.push(newObj);
        state.objections = objs;
        saveObjectionsLocally();
        renderObjectionButtons();
        showObjection(newObj.id);
      });
      container.appendChild(btnAddObj);
    }
  }

  // =========================================================================
  // F&I QUICK NOTES & EMAIL CAPTURE ENGINE
  // =========================================================================
  const fniNotesInput = document.getElementById('fni-notes-input');
  const btnCopyNotes = document.getElementById('btn-copy-notes');
  const btnClearNotes = document.getElementById('btn-clear-notes');
  const fniNotesStatus = document.getElementById('fni-notes-status');

  function initFniNotes() {
    if (!fniNotesInput) return;
    try {
      const savedNotes = localStorage.getItem('dealership_cockpit_fni_notes') || '';
      fniNotesInput.value = savedNotes;
    } catch (e) {}

    fniNotesInput.addEventListener('input', () => {
      try {
        localStorage.setItem('dealership_cockpit_fni_notes', fniNotesInput.value);
        if (fniNotesStatus) {
          fniNotesStatus.textContent = 'Auto-saved to session';
        }
      } catch (e) {}
    });

    if (btnCopyNotes) {
      btnCopyNotes.addEventListener('click', () => {
        if (!fniNotesInput.value.trim()) return;
        navigator.clipboard.writeText(fniNotesInput.value).then(() => {
          btnCopyNotes.textContent = '✔ Copied!';
          setTimeout(() => { btnCopyNotes.textContent = '📋 Copy'; }, 2000);
        }).catch(() => {
          fniNotesInput.select();
          document.execCommand('copy');
          btnCopyNotes.textContent = '✔ Copied!';
          setTimeout(() => { btnCopyNotes.textContent = '📋 Copy'; }, 2000);
        });
      });
    }

    if (btnClearNotes) {
      btnClearNotes.addEventListener('click', () => {
        if (!fniNotesInput.value) return;
        if (confirm('Clear F&I quick notes box?')) {
          fniNotesInput.value = '';
          try {
            localStorage.removeItem('dealership_cockpit_fni_notes');
            if (fniNotesStatus) fniNotesStatus.textContent = 'Cleared';
          } catch (e) {}
        }
      });
    }
  }

  // =========================================================================
  // DUAL-MODE APPLICATION CONTROLLER
  // =========================================================================
  const modeSelectModal = document.getElementById('mode-select-modal');
  const modalColdcallSubchoice = document.getElementById('modal-coldcall-subchoice');
  const btnSelectColdCall = document.getElementById('modal-select-coldcall');
  const btnSelectCloser = document.getElementById('modal-select-closer');
  const btnSelectCbfLeads = document.getElementById('modal-select-cbfleads');
  const btnSubchoiceRitual = document.getElementById('subchoice-select-ritual');
  const btnSubchoiceScript = document.getElementById('subchoice-select-script');
  const btnSubchoiceFollowup = document.getElementById('subchoice-select-followup');
  const btnSubnavFirsttouch = document.getElementById('subnav-firsttouch');
  const btnSubnavFollowup = document.getElementById('subnav-followup');
  const btnSubnavRitual = document.getElementById('subnav-ritual');
  const btnModeColdCall = document.getElementById('btn-mode-coldcall');
  const btnModeCloser = document.getElementById('btn-mode-closer');
  const btnModeCbfLeads = document.getElementById('btn-mode-cbfleads');
  const btnToggleRitual = document.getElementById('btn-toggle-ritual');
  const precallRitualView = document.getElementById('precall-ritual-view');
  const brandBadge = document.getElementById('brand-badge');
  const btnCollapseSidebar = document.getElementById('btn-collapse-sidebar');
  const btnExpandSidebar = document.getElementById('btn-expand-sidebar');
  const cockpitContainer = document.querySelector('.cockpit-container');

  function setSidebarCollapsed(collapsed) {
    state.isSidebarCollapsed = collapsed;
    try {
      localStorage.setItem('dealership_cockpit_sidebar_collapsed', collapsed ? 'true' : 'false');
    } catch (e) {}
    if (cockpitContainer) {
      cockpitContainer.classList.toggle('sidebar-collapsed', collapsed);
    }
  }

  function toggleSidebar() {
    setSidebarCollapsed(!state.isSidebarCollapsed);
  }

  if (btnCollapseSidebar) {
    btnCollapseSidebar.addEventListener('click', () => setSidebarCollapsed(true));
  }
  if (btnExpandSidebar) {
    btnExpandSidebar.addEventListener('click', () => setSidebarCollapsed(false));
  }

  // Restore saved sidebar collapsed preference
  try {
    const savedSidebar = localStorage.getItem('dealership_cockpit_sidebar_collapsed');
    if (savedSidebar === 'true') {
      setSidebarCollapsed(true);
    }
  } catch (e) {}

  function openModeModal() {
    closeColdcallSubchoice();
    if (modeSelectModal) modeSelectModal.style.display = 'flex';
  }

  function closeModeModal() {
    if (modeSelectModal) modeSelectModal.style.display = 'none';
  }

  function openColdcallSubchoice() {
    closeModeModal();
    if (modalColdcallSubchoice) modalColdcallSubchoice.style.display = 'flex';
  }

  function closeColdcallSubchoice() {
    if (modalColdcallSubchoice) modalColdcallSubchoice.style.display = 'none';
  }

  // --- PRE-FLIGHT MENTAL RITUAL RENDERING & CONTROL ---
  function renderPreCallRitual() {
    if (!precallRitualView) return;
    const precall = SCRIPT_DATA.precall;
    if (!precall) return;

    const isEdit = state.isEditing;
    const editAttr = isEdit ? 'contenteditable="true" spellcheck="false"' : '';

    const bellCurveCards = precall.bellCurve.tiers.map((tier, idx) => `
      <div class="bellcurve-card" style="border-top: 3px solid ${tier.color};">
        ${isEdit ? `<button class="btn-card-delete" data-delete-tier="${idx}" title="Delete this card">✕</button>` : ''}
        <div class="bellcurve-pct" style="color: ${tier.color};" ${editAttr} data-tier-idx="${idx}" data-tier-prop="percent">${escapeHtml(tier.percent)}</div>
        <div class="bellcurve-name" ${editAttr} data-tier-idx="${idx}" data-tier-prop="name">${escapeHtml(tier.name)}</div>
        <div class="bellcurve-behavior" ${editAttr} data-tier-idx="${idx}" data-tier-prop="behavior">${escapeHtml(tier.behavior)}</div>
        <div class="bellcurve-mindset" style="border-left-color: ${tier.color};" ${editAttr} data-tier-idx="${idx}" data-tier-prop="mindset">${escapeHtml(tier.mindset)}</div>
      </div>
    `).join('');

    const rulesItems = precall.improvements.rules.map((item, idx) => `
      <div class="ritual-rule-item">
        ${isEdit ? `<button class="btn-card-delete" data-delete-rule="${idx}" title="Delete this rule">✕</button>` : ''}
        <div class="rule-header" ${editAttr} data-rule-idx="${idx}" data-rule-prop="rule">${escapeHtml(item.rule)}</div>
        <div class="rule-desc" ${editAttr} data-rule-idx="${idx}" data-rule-prop="desc">${escapeHtml(item.desc)}</div>
      </div>
    `).join('');

    precallRitualView.innerHTML = `
      <div>
        <div class="ritual-header-badge">
          <span class="badge-pulse-dot"></span>
          <span ${editAttr} data-field="title">${escapeHtml(precall.title)}</span>
        </div>
        <h1 class="ritual-title">Pre-Session Mental Ritual</h1>
        <p class="ritual-subtitle" ${editAttr} data-field="subtitle">${escapeHtml(precall.subtitle)}</p>
      </div>

      <!-- MODULE 1: THE MISSION & IDENTITY -->
      <div class="ritual-block ritual-identity-card">
        <div class="ritual-block-title">⚡ <span ${editAttr} data-field="identity.headline">${escapeHtml(precall.identity.headline)}</span></div>
        <div class="ritual-identity-text" ${editAttr} data-field="identity.coreTruth">${escapeHtml(precall.identity.coreTruth)}</div>
        <div class="ritual-zero-stakes" ${editAttr} data-field="identity.zeroStakes">${escapeHtml(precall.identity.zeroStakes)}</div>
      </div>

      <!-- MODULE 2: STATISTICAL BELL CURVE -->
      <div class="ritual-block">
        <div class="ritual-block-title">📊 <span ${editAttr} data-field="bellCurve.headline">${escapeHtml(precall.bellCurve.headline)}</span></div>
        <div class="ritual-bellcurve-grid">
          ${bellCurveCards}
        </div>
        ${isEdit ? `<button class="btn-card-add" id="btn-add-bellcurve-tier">＋ Add Bell Curve Card</button>` : ''}
        <div class="ritual-trader-law" style="margin-top: 12px;">💡 <span ${editAttr} data-field="bellCurve.traderLaw">${escapeHtml(precall.bellCurve.traderLaw)}</span></div>
      </div>

      <!-- MODULE 3: WEEK 1 IMPROVEMENTS -->
      <div class="ritual-block">
        <div class="ritual-block-title">🎯 <span ${editAttr} data-field="improvements.headline">${escapeHtml(precall.improvements.headline)}</span></div>
        <div class="ritual-rules-list">
          ${rulesItems}
        </div>
        ${isEdit ? `<button class="btn-card-add" id="btn-add-rule-card">＋ Add Rule Card</button>` : ''}
      </div>

      <!-- MODULE 4: SOMATIC RESET & CADENCE -->
      <div class="ritual-block">
        <div class="ritual-block-title">🧘 <span ${editAttr} data-field="somatic.headline">${escapeHtml(precall.somatic.headline)}</span></div>
        <div class="somatic-grid">
          <div class="somatic-item">
            <div class="somatic-item-title">Box Breathing (4-4-4-4)</div>
            <div class="somatic-item-desc" ${editAttr} data-somatic-prop="boxBreathing">${escapeHtml(precall.somatic.boxBreathing)}</div>
          </div>
          <div class="somatic-item">
            <div class="somatic-item-title">Downward Vocal Cadence</div>
            <div class="somatic-item-desc" ${editAttr} data-somatic-prop="vocalPitch">${escapeHtml(precall.somatic.vocalPitch)}</div>
          </div>
          <div class="somatic-item">
            <div class="somatic-item-title">Hold The Tension</div>
            <div class="somatic-item-desc" ${editAttr} data-somatic-prop="tension">${escapeHtml(precall.somatic.tension)}</div>
          </div>
        </div>
      </div>

      <!-- MODULE 5: LAUNCH GATE (SINGULAR CTA) -->
      <div class="ritual-launch-gate">
        <button class="btn-ritual-launch" id="btn-ritual-launch">Enter Teleprompter &amp; Begin Dials →</button>
        <div class="ritual-launch-hint">Press <kbd>Enter</kbd> or <kbd>Space</kbd> to launch live dials &bull; Press <kbd>R</kbd> to toggle ritual</div>
      </div>
    `;

    const btnLaunch = document.getElementById('btn-ritual-launch');
    if (btnLaunch) {
      btnLaunch.addEventListener('click', () => {
        showColdCallScript();
      });
    }

    if (isEdit) {
      attachRitualEditListeners();
    }
  }

  function attachRitualEditListeners() {
    if (!precallRitualView) return;

    precallRitualView.querySelectorAll('[contenteditable="true"]').forEach(el => {
      const handleInput = () => {
        const field = el.dataset.field;
        const tierIdx = el.dataset.tierIdx;
        const tierProp = el.dataset.tierProp;
        const ruleIdx = el.dataset.ruleIdx;
        const ruleProp = el.dataset.ruleProp;
        const somaticProp = el.dataset.somaticProp;
        const textVal = el.innerText.trim();

        if (field) {
          const parts = field.split('.');
          if (parts.length === 1) {
            SCRIPT_DATA.precall[parts[0]] = textVal;
          } else if (parts.length === 2) {
            if (!SCRIPT_DATA.precall[parts[0]]) SCRIPT_DATA.precall[parts[0]] = {};
            SCRIPT_DATA.precall[parts[0]][parts[1]] = textVal;
          }
        } else if (tierIdx !== undefined && tierProp) {
          const idx = parseInt(tierIdx, 10);
          if (SCRIPT_DATA.precall.bellCurve && SCRIPT_DATA.precall.bellCurve.tiers[idx]) {
            SCRIPT_DATA.precall.bellCurve.tiers[idx][tierProp] = textVal;
          }
        } else if (ruleIdx !== undefined && ruleProp) {
          const idx = parseInt(ruleIdx, 10);
          if (SCRIPT_DATA.precall.improvements && SCRIPT_DATA.precall.improvements.rules[idx]) {
            SCRIPT_DATA.precall.improvements.rules[idx][ruleProp] = textVal;
          }
        } else if (somaticProp) {
          if (!SCRIPT_DATA.precall.somatic) SCRIPT_DATA.precall.somatic = {};
          SCRIPT_DATA.precall.somatic[somaticProp] = textVal;
        }

        savePrecallLocally();
      };

      el.addEventListener('input', handleInput);
      el.addEventListener('blur', handleInput);
    });

    // Delete tier buttons
    precallRitualView.querySelectorAll('[data-delete-tier]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.deleteTier, 10);
        if (confirm('Delete this Bell Curve card?')) {
          SCRIPT_DATA.precall.bellCurve.tiers.splice(idx, 1);
          savePrecallLocally();
          renderPreCallRitual();
        }
      });
    });

    // Delete rule buttons
    precallRitualView.querySelectorAll('[data-delete-rule]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.deleteRule, 10);
        if (confirm('Delete this rule card?')) {
          SCRIPT_DATA.precall.improvements.rules.splice(idx, 1);
          savePrecallLocally();
          renderPreCallRitual();
        }
      });
    });

    // Add tier button
    const btnAddTier = document.getElementById('btn-add-bellcurve-tier');
    if (btnAddTier) {
      btnAddTier.addEventListener('click', () => {
        const colors = ['#38BDF8', '#34D399', '#FBBF24', '#F87171', '#C084FC', '#94A3B8'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        SCRIPT_DATA.precall.bellCurve.tiers.push({
          percent: "10%",
          name: "New Tier Card",
          behavior: "Describe prospect behavior and common friction here...",
          mindset: "Describe your mental posture and reaction rule here...",
          color: randomColor
        });
        savePrecallLocally();
        renderPreCallRitual();
      });
    }

    // Add rule button
    const btnAddRule = document.getElementById('btn-add-rule-card');
    if (btnAddRule) {
      btnAddRule.addEventListener('click', () => {
        SCRIPT_DATA.precall.improvements.rules.push({
          rule: "New Protocol Upgrade",
          desc: "Describe the specific execution rule, cue, or protocol to follow."
        });
        savePrecallLocally();
        renderPreCallRitual();
      });
    }
  }

  function savePrecallLocally() {
    try {
      localStorage.setItem('dealership_cockpit_precall', JSON.stringify(SCRIPT_DATA.precall));
    } catch (e) {
      console.warn('Failed saving precall to localStorage:', e);
    }
  }

  function showPreCallRitual() {
    state.isRitualActive = true;
    if (precallRitualView) {
      renderPreCallRitual();
      precallRitualView.style.display = 'flex';
      precallRitualView.scrollTop = 0;
    }
    const scriptStage = document.getElementById('script-stage');
    if (scriptStage) scriptStage.style.display = 'none';
    if (btnToggleRitual) btnToggleRitual.classList.add('active');
  }

  function updateSubnavPills() {
    if (btnSubnavFirsttouch) btnSubnavFirsttouch.classList.toggle('active', !state.isRitualActive && state.coldcallSubmode === 'first_touch');
    if (btnSubnavFollowup) btnSubnavFollowup.classList.toggle('active', !state.isRitualActive && state.coldcallSubmode === 'followup');
    if (btnSubnavRitual) btnSubnavRitual.classList.toggle('active', state.isRitualActive);
  }

  function setColdcallSubmode(submode) {
    state.coldcallSubmode = submode;
    try {
      localStorage.setItem('dealership_cockpit_coldcall_submode', submode);
    } catch (e) {}

    if (submode === 'ritual') {
      showPreCallRitual();
      updateSubnavPills();
      return;
    }

    state.isRitualActive = false;
    if (precallRitualView) precallRitualView.style.display = 'none';
    const scriptStage = document.getElementById('script-stage');
    if (scriptStage) scriptStage.style.display = 'block';
    if (btnToggleRitual) btnToggleRitual.classList.remove('active');

    if (brandBadge && state.mode === 'coldcall') {
      if (submode === 'followup') {
        brandBadge.textContent = '📞 Cold Call • Follow-Up';
      } else {
        brandBadge.textContent = '📞 Cold Call • First Touch';
      }
    }

    dismissObjection();
    loadDataForCurrentMode();
    renderScript();
    setActiveBlock(0);
    renderObjectionButtons();
    updateSubnavPills();
  }

  function showColdCallScript() {
    state.isRitualActive = false;
    if (precallRitualView) precallRitualView.style.display = 'none';
    const scriptStage = document.getElementById('script-stage');
    if (scriptStage) scriptStage.style.display = 'block';
    if (btnToggleRitual) btnToggleRitual.classList.remove('active');

    if (brandBadge && state.mode === 'coldcall') {
      if (state.coldcallSubmode === 'followup') {
        brandBadge.textContent = '📞 Cold Call • Follow-Up';
      } else {
        brandBadge.textContent = '📞 Cold Call • First Touch';
      }
    }

    renderScript();
    setActiveBlock(0);
    updateSubnavPills();
  }

  function togglePreCallRitual() {
    if (state.mode !== 'coldcall') return;
    if (state.isRitualActive) {
      showColdCallScript();
    } else {
      showPreCallRitual();
    }
  }

  function setMode(newMode) {
    state.mode = newMode;
    localStorage.setItem('dealership_cockpit_mode', newMode);

    if (newMode !== 'coldcall') {
      state.isRitualActive = false;
      if (precallRitualView) precallRitualView.style.display = 'none';
      if (btnToggleRitual) btnToggleRitual.classList.remove('active');
      const scriptStage = document.getElementById('script-stage');
      if (scriptStage) scriptStage.style.display = 'block';
    }

    document.body.classList.toggle('mode-coldcall', newMode === 'coldcall');
    document.body.classList.toggle('mode-closer', newMode === 'closer');
    document.body.classList.toggle('mode-cbfleads', newMode === 'cbfleads');

    if (btnModeColdCall) btnModeColdCall.classList.toggle('active', newMode === 'coldcall');
    if (btnModeCloser) btnModeCloser.classList.toggle('active', newMode === 'closer');
    if (btnModeCbfLeads) btnModeCbfLeads.classList.toggle('active', newMode === 'cbfleads');

    if (brandBadge) {
      if (newMode === 'coldcall') {
        brandBadge.textContent = state.coldcallSubmode === 'followup' ? '📞 Cold Call • Follow-Up' : '📞 Cold Call • First Touch';
      } else if (newMode === 'cbfleads') {
        brandBadge.textContent = '🚗 CBF Leads';
      } else {
        brandBadge.textContent = 'Dealership Live Sales';
      }
    }

    // Dynamic HUD notes context for CBF Leads vs Dealer
    const notesLabel = document.querySelector('.fni-notes-label');
    const notesInput = document.getElementById('fni-notes-input');
    if (notesLabel && notesInput) {
      if (newMode === 'cbfleads') {
        notesLabel.textContent = '📝 Lead Notes & Docs';
        notesInput.placeholder = 'Paste or type buyer credit score, car wanted, decline reason, ID & docs...';
      } else {
        notesLabel.textContent = '📝 F&I Notes & Email';
        notesInput.placeholder = 'Paste or type F&I direct email, cell, notes...';
      }
    }

    dismissObjection();
    loadDataForCurrentMode();
    if (!state.isRitualActive) {
      renderScript();
      setActiveBlock(0);
    }
    renderObjectionButtons();
    updateSubnavPills();

    if (newMode === 'closer') {
      calculateMath();
      resetTimer();
    }
  }

  if (btnSelectColdCall) {
    btnSelectColdCall.addEventListener('click', () => {
      openColdcallSubchoice();
    });
  }

  if (btnSubchoiceRitual) {
    btnSubchoiceRitual.addEventListener('click', () => {
      closeColdcallSubchoice();
      setMode('coldcall');
      setColdcallSubmode('ritual');
    });
  }

  if (btnSubchoiceScript) {
    btnSubchoiceScript.addEventListener('click', () => {
      closeColdcallSubchoice();
      setMode('coldcall');
      setColdcallSubmode('first_touch');
    });
  }

  if (btnSubchoiceFollowup) {
    btnSubchoiceFollowup.addEventListener('click', () => {
      closeColdcallSubchoice();
      setMode('coldcall');
      setColdcallSubmode('followup');
    });
  }

  if (btnSubnavFirsttouch) {
    btnSubnavFirsttouch.addEventListener('click', () => {
      setColdcallSubmode('first_touch');
    });
  }

  if (btnSubnavFollowup) {
    btnSubnavFollowup.addEventListener('click', () => {
      setColdcallSubmode('followup');
    });
  }

  if (btnSubnavRitual) {
    btnSubnavRitual.addEventListener('click', () => {
      setColdcallSubmode('ritual');
    });
  }

  if (btnToggleRitual) {
    btnToggleRitual.addEventListener('click', () => {
      togglePreCallRitual();
    });
  }

  if (btnSelectCloser) {
    btnSelectCloser.addEventListener('click', () => {
      closeModeModal();
      setMode('closer');
    });
  }

  if (btnSelectCbfLeads) {
    btnSelectCbfLeads.addEventListener('click', () => {
      closeModeModal();
      setMode('cbfleads');
    });
  }

  if (btnModeColdCall) btnModeColdCall.addEventListener('click', () => {
    setMode('coldcall');
    showColdCallScript();
  });
  if (btnModeCloser) btnModeCloser.addEventListener('click', () => setMode('closer'));
  if (btnModeCbfLeads) btnModeCbfLeads.addEventListener('click', () => setMode('cbfleads'));

  // =========================================================================
  // REACTIVE BLEED CALCULATOR (CLOSER MODE)
  // =========================================================================
  const inputApps = document.getElementById('input-apps');
  const inputDecline = document.getElementById('input-decline');
  const inputMargin = document.getElementById('input-margin');
  const inputRecovered = document.getElementById('input-recovered');
  const hudMonthlyBleed = document.getElementById('hud-monthly-bleed');
  const calcStatus = document.getElementById('calc-status');

  function calculateMath() {
    if (!inputApps || !inputDecline || !inputMargin || !inputRecovered) return;
    const apps = Math.max(1, parseInt(inputApps.value, 10) || 50);
    const declineRate = Math.min(100, Math.max(1, parseInt(inputDecline.value, 10) || 50));
    const avgMargin = Math.max(1000, parseInt(inputMargin.value, 10) || 20000);
    const recUnits = Math.max(1, parseInt(inputRecovered.value, 10) || 5);

    const declinedUnits = Math.round(apps * (declineRate / 100));
    const monthlyBleed = declinedUnits * avgMargin;
    const annualBleed = monthlyBleed * 12;
    const recRevenue = recUnits * avgMargin;

    state.math.monthlyApps = apps;
    state.math.declineRate = declineRate;
    state.math.declinedUnits = declinedUnits;
    state.math.avgMargin = avgMargin;
    state.math.recoveredUnits = recUnits;
    state.math.monthlyBleed = monthlyBleed;
    state.math.annualBleed = annualBleed;
    state.math.recoveredRevenue = recRevenue;

    if (hudMonthlyBleed) hudMonthlyBleed.textContent = formatRand(monthlyBleed);

    if (calcStatus) {
      calcStatus.textContent = 'SYNCING...';
      calcStatus.style.color = 'var(--text-accent)';
      setTimeout(() => {
        calcStatus.textContent = 'SYNCED';
        calcStatus.style.color = 'var(--color-green)';
      }, 150);
    }

    updateTokensInDOM();
  }

  function updateTokensInDOM() {
    document.querySelectorAll('.token[data-token="monthly_apps"]').forEach(el => el.textContent = state.math.monthlyApps);
    document.querySelectorAll('.token[data-token="decline_rate"]').forEach(el => el.textContent = `${state.math.declineRate}%`);
    document.querySelectorAll('.token[data-token="declined_units"]').forEach(el => el.textContent = state.math.declinedUnits);
    document.querySelectorAll('.token[data-token="avg_margin"]').forEach(el => el.textContent = formatRand(state.math.avgMargin));
    document.querySelectorAll('.token[data-token="monthly_bleed"]').forEach(el => el.textContent = formatRand(state.math.monthlyBleed));
    document.querySelectorAll('.token[data-token="annual_bleed"]').forEach(el => el.textContent = formatRand(state.math.annualBleed));
    document.querySelectorAll('.token[data-token="recovered_units"]').forEach(el => el.textContent = state.math.recoveredUnits);
    document.querySelectorAll('.token[data-token="recovered_revenue"]').forEach(el => el.textContent = formatRand(state.math.recoveredRevenue));
  }

  if (inputApps) inputApps.addEventListener('input', calculateMath);
  if (inputDecline) inputDecline.addEventListener('input', calculateMath);
  if (inputMargin) inputMargin.addEventListener('input', calculateMath);
  if (inputRecovered) inputRecovered.addEventListener('input', calculateMath);

  // =========================================================================
  // 15-MINUTE PACING TIMER (CLOSER MODE)
  // =========================================================================
  const timerDisplay = document.getElementById('timer-display');
  const timerPhaseLabel = document.getElementById('timer-phase-label');
  const btnTimerToggle = document.getElementById('btn-timer-toggle');
  const btnTimerReset = document.getElementById('btn-timer-reset');

  function updateTimer() {
    if (!state.timer.isRunning) return;
    const now = Date.now();
    const elapsedSinceStart = now - state.timer.startedAt;
    const currentTotalElapsed = state.timer.elapsedMs + elapsedSinceStart;
    const remainingMs = state.timer.totalDurationMs - currentTotalElapsed;

    timerDisplay.textContent = formatTime(remainingMs);

    const elapsedMins = currentTotalElapsed / (60 * 1000);
    if (elapsedMins < 5) {
      timerPhaseLabel.textContent = 'PHASE 1: DIAGNOSIS (0-5m)';
      timerDisplay.classList.remove('phase-2', 'phase-3', 'overtime');
    } else if (elapsedMins < 10) {
      timerPhaseLabel.textContent = 'PHASE 2: THE VACATION (5-10m)';
      timerDisplay.classList.add('phase-2');
      timerDisplay.classList.remove('phase-3', 'overtime');
    } else if (elapsedMins <= 15) {
      timerPhaseLabel.textContent = 'PHASE 3: RESOLUTION & CLOSE (10-15m)';
      timerDisplay.classList.add('phase-3');
      timerDisplay.classList.remove('phase-2', 'overtime');
    } else {
      timerPhaseLabel.textContent = 'OVERTIME — WRAP MEETING';
      timerDisplay.classList.add('overtime');
    }
  }

  function toggleTimer() {
    if (state.mode !== 'closer') return;
    if (state.timer.isRunning) {
      clearInterval(state.timer.timerId);
      state.timer.elapsedMs += (Date.now() - state.timer.startedAt);
      state.timer.isRunning = false;
      state.timer.startedAt = null;
      btnTimerToggle.textContent = 'Resume [Space]';
      btnTimerToggle.classList.remove('active');
    } else {
      state.timer.isRunning = true;
      state.timer.startedAt = Date.now();
      state.timer.timerId = setInterval(updateTimer, 200);
      btnTimerToggle.textContent = 'Pause [Space]';
      btnTimerToggle.classList.add('active');
    }
  }

  function resetTimer() {
    if (state.timer.timerId) clearInterval(state.timer.timerId);
    state.timer.isRunning = false;
    state.timer.startedAt = null;
    state.timer.elapsedMs = 0;
    if (btnTimerToggle) {
      btnTimerToggle.textContent = 'Start [Space]';
      btnTimerToggle.classList.remove('active');
    }
    if (timerDisplay) {
      timerDisplay.textContent = '15:00';
      timerDisplay.classList.remove('phase-2', 'phase-3', 'overtime');
    }
    if (timerPhaseLabel) timerPhaseLabel.textContent = 'PHASE 1: DIAGNOSIS (0-5m)';
  }

  if (btnTimerToggle) btnTimerToggle.addEventListener('click', toggleTimer);
  if (btnTimerReset) btnTimerReset.addEventListener('click', resetTimer);

  // =========================================================================
  // PANIC EMERGENCY BLANK OVERLAY (HOTKEY 'B')
  // =========================================================================
  const panicOverlay = document.getElementById('panic-overlay');

  function togglePanic() {
    state.isPanic = !state.isPanic;
    if (panicOverlay) panicOverlay.classList.toggle('active', state.isPanic);
  }

  if (panicOverlay) panicOverlay.addEventListener('click', () => { if (state.isPanic) togglePanic(); });

  // =========================================================================
  // FONT SIZE SCALING
  // =========================================================================
  const btnFontUp = document.getElementById('btn-font-up');
  const btnFontDown = document.getElementById('btn-font-down');

  if (btnFontUp) {
    btnFontUp.addEventListener('click', () => {
      state.fontBasePx = Math.min(42, state.fontBasePx + 2);
      document.documentElement.style.setProperty('--font-base', state.fontBasePx + 'px');
    });
  }

  if (btnFontDown) {
    btnFontDown.addEventListener('click', () => {
      state.fontBasePx = Math.max(14, state.fontBasePx - 2);
      document.documentElement.style.setProperty('--font-base', state.fontBasePx + 'px');
    });
  }

  // =========================================================================
  // IN-BROWSER EDIT MODE ENGINE (EDIT EVERYTHING)
  // =========================================================================
  const btnToggleEdit = document.getElementById('btn-toggle-edit');
  const editModeBanner = document.getElementById('edit-mode-banner');
  const btnSaveDisk = document.getElementById('btn-save-disk');
  const btnResetScript = document.getElementById('btn-reset-script');
  const btnDoneEdit = document.getElementById('btn-done-edit');

  function toggleEditMode(forceVal) {
    state.isEditing = (typeof forceVal === 'boolean') ? forceVal : !state.isEditing;
    if (btnToggleEdit) btnToggleEdit.classList.toggle('active-edit', state.isEditing);
    if (editModeBanner) editModeBanner.classList.toggle('active', state.isEditing);
    document.body.classList.toggle('is-editing', state.isEditing);
    document.body.classList.toggle('is-editing-mode', state.isEditing);

    if (state.isRitualActive) {
      renderPreCallRitual();
    } else {
      renderScript();
      if (state.activeObjectionId) {
        showObjection(state.activeObjectionId);
      }
      if (!state.isEditing) {
        setActiveBlock(state.activeBlockIndex);
      }
    }
    renderObjectionButtons();
  }

  if (btnToggleEdit) btnToggleEdit.addEventListener('click', () => toggleEditMode());
  if (btnDoneEdit) btnDoneEdit.addEventListener('click', () => toggleEditMode(false));

  // =========================================================================
  // RICH TEXT COLOR & HIGHLIGHT FORMATTING TOOLBAR
  // =========================================================================
  function applyFormattingToSelection(command, value) {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return;

    let node = sel.anchorNode;
    while (node && node !== document.body) {
      if (node.isContentEditable) break;
      node = node.parentNode;
    }
    if (!node || !node.isContentEditable) return;

    if (command === 'foreColor') {
      document.execCommand('styleWithCSS', false, true);
      document.execCommand('foreColor', false, value);
    } else if (command === 'hiliteColor') {
      document.execCommand('styleWithCSS', false, true);
      document.execCommand('hiliteColor', false, value);
    } else if (command === 'clearHl') {
      document.execCommand('styleWithCSS', false, true);
      document.execCommand('hiliteColor', false, 'transparent');
    } else if (command === 'removeFormat') {
      document.execCommand('removeFormat', false, null);
    }

    node.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function initFormatToolbar() {
    const formatToolbar = document.getElementById('edit-format-toolbar');
    if (!formatToolbar) return;

    // Prevent focus loss on mousedown so selection is preserved
    formatToolbar.querySelectorAll('button, label').forEach(el => {
      el.addEventListener('mousedown', (e) => {
        e.preventDefault();
      });
    });

    // Text color swatches
    formatToolbar.querySelectorAll('.btn-color-swatch').forEach(btn => {
      btn.addEventListener('click', () => {
        applyFormattingToSelection('foreColor', btn.dataset.color);
      });
    });

    // Custom color picker
    const customColorInput = document.getElementById('text-color-custom');
    if (customColorInput) {
      customColorInput.addEventListener('change', () => {
        applyFormattingToSelection('foreColor', customColorInput.value);
      });
      customColorInput.addEventListener('input', () => {
        applyFormattingToSelection('foreColor', customColorInput.value);
      });
    }

    // Highlight swatches
    formatToolbar.querySelectorAll('.btn-hl-swatch').forEach(btn => {
      btn.addEventListener('click', () => {
        applyFormattingToSelection('hiliteColor', btn.dataset.hl);
      });
    });

    // Clear highlight button
    const btnClearHl = document.getElementById('btn-clear-hl');
    if (btnClearHl) {
      btnClearHl.addEventListener('click', () => {
        applyFormattingToSelection('clearHl');
      });
    }

    // Clear all formatting button
    const btnClearFormat = document.getElementById('btn-clear-format');
    if (btnClearFormat) {
      btnClearFormat.addEventListener('click', () => {
        applyFormattingToSelection('removeFormat');
      });
    }
  }

  initFormatToolbar();

  if (btnResetScript) {
    btnResetScript.addEventListener('click', () => {
      if (state.isRitualActive) {
        if (confirm('Reset Pre-Session Ritual back to original master defaults?')) {
          localStorage.removeItem('dealership_cockpit_precall');
          location.reload();
        }
        return;
      }

      let modeLabel = 'C.L.O.S.E.R.';
      if (state.mode === 'coldcall') modeLabel = 'Cold Call';
      if (state.mode === 'cbfleads') modeLabel = 'CBF Leads';
      if (confirm(`Reset all ${modeLabel} scripts and cards back to master defaults?`)) {
        localStorage.removeItem('dealership_cockpit_blocks_' + state.mode);
        localStorage.removeItem('dealership_cockpit_objs_' + state.mode);
        state.blocks = JSON.parse(JSON.stringify(getMasterBlocks(state.mode)));
        state.objections = JSON.parse(JSON.stringify(getMasterObjections(state.mode)));
        renderScript();
        renderObjectionButtons();
        if (state.activeObjectionId) {
          showObjection(state.activeObjectionId);
        }
        setActiveBlock(0);
        alert(`${modeLabel} scripts and cards reset to original defaults.`);
      }
    });
  }

  if (btnSaveDisk) {
    btnSaveDisk.addEventListener('click', async () => {
      btnSaveDisk.textContent = 'Saving...';
      try {
        if (typeof SCRIPT_DATA !== 'undefined') {
          const currentKey = getCurrentSubKey();
          if (!SCRIPT_DATA[currentKey]) SCRIPT_DATA[currentKey] = {};
          SCRIPT_DATA[currentKey].blocks = state.blocks;
          SCRIPT_DATA[currentKey].objections = state.objections;
        }

        const payload = {
          version: (typeof SCRIPT_DATA !== 'undefined' && SCRIPT_DATA.version) ? SCRIPT_DATA.version : "4.5",
          closer: (typeof SCRIPT_DATA !== 'undefined' && SCRIPT_DATA.closer) ? SCRIPT_DATA.closer : {},
          coldcall: (typeof SCRIPT_DATA !== 'undefined' && SCRIPT_DATA.coldcall) ? SCRIPT_DATA.coldcall : {},
          coldcall_followup: (typeof SCRIPT_DATA !== 'undefined' && SCRIPT_DATA.coldcall_followup) ? SCRIPT_DATA.coldcall_followup : {},
          cbfleads: (typeof SCRIPT_DATA !== 'undefined' && SCRIPT_DATA.cbfleads) ? SCRIPT_DATA.cbfleads : {},
          precall: (typeof SCRIPT_DATA !== 'undefined' && SCRIPT_DATA.precall) ? SCRIPT_DATA.precall : {},
          tokens: state.math,
          blocks: SCRIPT_DATA.closer ? SCRIPT_DATA.closer.blocks : state.blocks,
          objections: SCRIPT_DATA.closer ? SCRIPT_DATA.closer.objections : state.objections
        };

        const res = await fetch('/api/save-script', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          btnSaveDisk.textContent = '✔ Saved to script_data.js!';
          setTimeout(() => { btnSaveDisk.textContent = '💾 Save Directly to File'; }, 2500);
        } else {
          throw new Error('Save API returned ' + res.status);
        }
      } catch (err) {
        btnSaveDisk.textContent = 'Saved in Browser Cache';
        alert('Saved to local browser storage! Note: Make sure "node server.js" is running to save directly to disk.');
        setTimeout(() => { btnSaveDisk.textContent = '💾 Save Directly to File'; }, 2500);
      }
    });
  }

  // =========================================================================
  // ERGONOMIC KEYBOARD HOTKEYS ENGINE
  // =========================================================================
  window.addEventListener('keydown', (e) => {
    // 1. SAFETY SHIELD: Ignore when typing in inputs or contenteditables
    const activeEl = document.activeElement;
    if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.isContentEditable)) {
      if (e.key === 'Escape') {
        activeEl.blur();
      }
      return;
    }

    // TOGGLE SIDEBAR HOTKEY: Ctrl+B or '['
    if ((e.ctrlKey || e.metaKey) && (e.key === 'b' || e.key === 'B')) {
      e.preventDefault();
      toggleSidebar();
      return;
    }
    if (e.key === '[' || e.key === ']') {
      e.preventDefault();
      toggleSidebar();
      return;
    }

    if (e.ctrlKey || e.altKey || e.metaKey) return;
    if (e.repeat) return;

    // PANIC KEY: 'B'
    if (e.key === 'b' || e.key === 'B') {
      e.preventDefault();
      togglePanic();
      return;
    }
    if (state.isPanic) {
      if (e.key === 'Escape') togglePanic();
      return;
    }

    // ESCAPE: Dismiss objection or modal
    if (e.key === 'Escape') {
      e.preventDefault();
      dismissObjection();
      if (modalColdcallSubchoice && modalColdcallSubchoice.style.display !== 'none') {
        closeColdcallSubchoice();
        openModeModal();
        return;
      }
      closeModeModal();
      return;
    }

    // SUB-CHOICE MODAL SHORTCUTS: 'R' for Pre-Flight Ritual, 'S' for Live Teleprompter, 'F' for Follow-Up
    if (modalColdcallSubchoice && modalColdcallSubchoice.style.display !== 'none') {
      if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        closeColdcallSubchoice();
        setMode('coldcall');
        setColdcallSubmode('ritual');
        return;
      }
      if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        closeColdcallSubchoice();
        setMode('coldcall');
        setColdcallSubmode('first_touch');
        return;
      }
      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        closeColdcallSubchoice();
        setMode('coldcall');
        setColdcallSubmode('followup');
        return;
      }
    }

    // MAIN LAUNCH MODAL SHORTCUTS: When launch modal is active, '1' opens Cold Call Subchoice, '2' launches Closer, '3' launches CBF Leads
    if (modeSelectModal && modeSelectModal.style.display !== 'none') {
      if (e.key === '1') {
        e.preventDefault();
        openColdcallSubchoice();
        return;
      }
      if (e.key === '2') {
        e.preventDefault();
        closeModeModal();
        setMode('closer');
        return;
      }
      if (e.key === '3') {
        e.preventDefault();
        closeModeModal();
        setMode('cbfleads');
        return;
      }
    }

    // RITUAL VIEW ACTIVE: Enter or Space launches live script immediately
    if (state.mode === 'coldcall' && state.isRitualActive) {
      if (e.key === 'Enter' || e.code === 'Space') {
        e.preventDefault();
        showColdCallScript();
        return;
      }
      if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        showColdCallScript();
        return;
      }
    }

    // BLOCK STEPPING: Right/Down/J (Next), Left/Up/K (Previous)
    if (e.key === 'j' || e.key === 'J' || e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      stepBlock(1);
      return;
    }
    if (e.key === 'k' || e.key === 'K' || e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      stepBlock(-1);
      return;
    }

    // NUMBER KEYS: Jump to Phase/Stage
    if (['1', '2', '3', '4', '5', '6'].includes(e.key)) {
      e.preventDefault();
      jumpToPhase(parseInt(e.key, 10));
      return;
    }

    // MODE-SPECIFIC HOTKEYS
    if (state.mode === 'coldcall') {
      const key = e.key.toUpperCase();
      if (key === 'R') { e.preventDefault(); togglePreCallRitual(); return; }

      if (state.coldcallSubmode === 'followup') {
        // FOLLOW-UP SPECIFIC BATTLECARD HOTKEYS
        if (key === 'H') { e.preventDefault(); showObjection('obj-fu-notime'); return; }
        if (key === 'S') { e.preventDefault(); showObjection('obj-fu-resend'); return; }
        if (key === 'N') { e.preventDefault(); showObjection('obj-fu-notinterested'); return; }
        if (key === 'D') { e.preventDefault(); showObjection('obj-fu-delivery'); return; }
      } else {
        // FIRST-TOUCH COLD CALL HOTKEYS
        if (key === 'S') { e.preventDefault(); showObjection('obj-cc-screen'); return; }
        if (key === 'E') { e.preventDefault(); showObjection('obj-cc-email'); return; }
        if (key === 'P') { e.preventDefault(); showObjection('obj-cc-popia'); return; }
        if (key === 'V') { e.preventDefault(); showObjection('obj-cc-virtual'); return; }
        if (key === 'X') { e.preventDefault(); showObjection('obj-cc-nodeclines'); return; }
        if (key === 'G') { e.preventDefault(); showObjection('obj-cc-grouppolicy'); return; }
        if (key === 'T') { e.preventDefault(); showObjection('obj-cc-transunion'); return; }
        if (key === 'H') { e.preventDefault(); showObjection('obj-cc-how'); return; }
        if (key === 'F') { e.preventDefault(); showObjection('obj-cc-privatefni'); return; }
      }
    } else if (state.mode === 'cbfleads') {
      // CBF LEADS HOTKEYS
      const key = e.key.toUpperCase();
      if (key === 'P') { e.preventDefault(); showObjection('obj-cbf-price'); return; }
      if (key === 'G') { e.preventDefault(); showObjection('obj-cbf-guarantee'); return; }
      if (key === 'B') { e.preventDefault(); showObjection('obj-cbf-blacklisted'); return; }
      if (key === 'D') { e.preventDefault(); showObjection('obj-cbf-debtreview'); return; }
      if (key === 'C') { e.preventDefault(); showObjection('obj-cbf-scam'); return; }
      if (key === 'T') { e.preventDefault(); showObjection('obj-cbf-timeline'); return; }
      if (key === 'E') { e.preventDefault(); toggleEditMode(); return; }
    } else {
      // CLOSER MEETING HOTKEYS
      if (e.code === 'Space') {
        e.preventDefault();
        toggleTimer();
        return;
      }
      if (e.key === 'r' || e.key === 'R') {
        const now = Date.now();
        if (now - state.timer.lastRPressTime < 500) {
          resetTimer();
          state.timer.lastRPressTime = 0;
        } else {
          state.timer.lastRPressTime = now;
        }
        return;
      }
      if (e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        const threeDecisionsIdx = state.blocks.findIndex(b => b.id === 'close-three-decisions');
        if (threeDecisionsIdx !== -1) setActiveBlock(threeDecisionsIdx);
        showObjection('obj-dp-think');
        return;
      }
      if (e.key === 'e' || e.key === 'E') {
        e.preventDefault();
        toggleEditMode();
        return;
      }
      if (e.key === 'f' || e.key === 'F') { e.preventDefault(); showObjection('obj-fni-approval'); return; }
      if (e.key === 'm' || e.key === 'M') { e.preventDefault(); showObjection('obj-fee-pushback'); return; }
      if (e.key === 't' || e.key === 'T') { e.preventDefault(); showObjection('obj-timeline'); return; }
      if (e.key === 'c' || e.key === 'C') { e.preventDefault(); showObjection('obj-data-buyer'); return; }
    }
  });

  // =========================================================================
  // BOOTSTRAP INITIALIZATION
  // =========================================================================
  // Set initial font base (zoomed out at max level: 18px)
  document.documentElement.style.setProperty('--font-base', state.fontBasePx + 'px');

  // Initialize F&I quick notes & email capture
  initFniNotes();

  const savedMode = localStorage.getItem('dealership_cockpit_mode') || 'coldcall';
  setMode(savedMode);

  // Always show launch modal on page load as primary operational gateway
  openModeModal();

  if (brandBadge) {
    brandBadge.style.cursor = 'pointer';
    brandBadge.title = "Click to switch operational workspace (or press M)";
    brandBadge.addEventListener('click', openModeModal);
  }

})();
