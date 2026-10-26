/**
 * Automated Regression Test: Verify Regex Silence Over Rep Spoken Script
 * Run: node test_script_regex.js
 */

const SCRIPT_DATA = require('./script_data.js');

console.log("=== RUNNING REGRESSION TEST: OBJECTION REGEXES OVER SCRIPT DATA ===");

let totalTested = 0;
let collisions = [];

const compiledPatterns = SCRIPT_DATA.objections.map(obj => ({
  id: obj.id,
  title: obj.title,
  regex: new RegExp(obj.regexPattern, 'i')
}));

SCRIPT_DATA.blocks.forEach(block => {
  if (block.type === 'rep') {
    totalTested++;
    compiledPatterns.forEach(pat => {
      // Test the raw text (and replace tokens with dummy values)
      let renderedText = block.text
        .replace(/\{\{monthly_apps\}\}/g, "50")
        .replace(/\{\{decline_rate\}\}/g, "50")
        .replace(/\{\{declined_units\}\}/g, "25")
        .replace(/\{\{avg_margin\}\}/g, "R 20 000")
        .replace(/\{\{monthly_bleed\}\}/g, "R 500 000")
        .replace(/\{\{annual_bleed\}\}/g, "R 6 000 000")
        .replace(/\{\{recovered_units\}\}/g, "5")
        .replace(/\{\{recovered_revenue\}\}/g, "R 100 000");

      const match = pat.regex.exec(renderedText);
      if (match) {
        collisions.push({
          blockId: block.id,
          section: block.section,
          pattern: pat.title,
          matchedPhrase: match[0],
          textSnippet: renderedText.substring(Math.max(0, match.index - 30), match.index + 50)
        });
      }
    });
  }
});

if (collisions.length === 0) {
  console.log(`\x1b[32m✔ PASS: All ${totalTested} rep script blocks tested. Zero (0) false-positive self-triggers found!\x1b[0m`);
  process.exit(0);
} else {
  console.error(`\x1b[31m✖ FAIL: Found ${collisions.length} self-trigger collisions:\x1b[0m`);
  collisions.forEach(c => {
    console.error(`  - Block [${c.blockId}] in [${c.section}] matched [${c.pattern}]: "${c.matchedPhrase}"\n    Context: "...${c.textSnippet}..."`);
  });
  process.exit(1);
}
