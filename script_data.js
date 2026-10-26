/**
 * Master Script Data for Dealership Live Sales Cockpit
 * Saved automatically from Cockpit In-Browser Editor
 */

const SCRIPT_DATA = {
  "version": "4.5",
  "closer": {
    "tokens": {
      "monthly_apps": 50,
      "decline_rate": 50,
      "declined_units": 25,
      "avg_margin": 20000,
      "monthly_bleed": 500000,
      "annual_bleed": 6000000,
      "recovered_units": 5,
      "recovered_revenue": 100000
    },
    "blocks": [
      {
        "id": "intro-frame",
        "phase": 1,
        "phaseName": "PHASE 1: DIAGNOSIS",
        "section": "1. Introduction (0:00 - 0:45)",
        "type": "rep",
        "speaker": "Rep",
        "text": "Hey [Name], appreciate you making the time today. I know how busy it gets, floor so I'm going to respect your clock and keep this strictly to 15 minutes.\n\njust need to set the agenda for the meeting : I want to ask a few quick questions about how your finance pipeline is currently running to get a better understanding of your dealership and how your team handles the Rejcted leads. \n\nthen once that is we can just jump to the presentation on how we solved this problem for dealerships around the arear, sounds fair enough? \n",
        "cue": "Wait for prospect: 'Fair enough / Sounds good.'",
        "stageNote": "Relaxed, peer-to-peer tonality. Do not rush.",
        "_isCustomEdited": true
      },
      {
        "id": "clarify-why-now",
        "phase": 1,
        "phaseName": "PHASE 1: DIAGNOSIS",
        "section": "\n2. C — Clarify  (0:45 - 1:30)",
        "type": "rep",
        "speaker": "Rep",
        "text": "Awesome. \nIm going to assume you guys are on Auto trader, Cars and social media right.? ",
        "cue": "Listen actively. Note their exact words (e.g. 'Signio declines', 'unpaids', 'high DTI').",
        "stageNote": "Let them talk without interrupting. Note down their exact vocabulary.",
        "_isCustomEdited": true
      },
      {
        "id": "clarify-golden-numbers",
        "phase": 1,
        "phaseName": "PHASE 1: DIAGNOSIS",
        "section": "\n2. C — The 3 Golden Numbers (1:30 - 2:30)",
        "type": "rep",
        "speaker": "Rep",
        "text": "right and out of those ads how many applications is the D generating on a monthly baises? \n\n1. Roughly how many finance applications is your floor submitting to the banks every month across all lenders?\n\n2. And of those, what percentage would you say are coming back system-declined or turned down on affordability?\n\n3. Got it. So out of {{monthly_apps}} applications, you've got roughly {{declined_units}} people a month getting turned down. What is your team's standard process for those {{declined_units}} customers right now once that decline pops up on Signio?",
        "cue": "Prospect answers: 'Nothing really, the deal just dies / we move on to the next lead.'",
        "stageNote": "Input their exact numbers in the left HUD calculator immediately.",
        "_isCustomEdited": true
      },
      {
        "id": "clarify-root-cause",
        "phase": 1,
        "phaseName": "PHASE 1: DIAGNOSIS",
        "section": "2. C — Root Cause Diagnostic (2:30 - 3:15)",
        "type": "rep",
        "speaker": "Rep",
        "text": "When your leads get rejected by the banks, what is the biggest causation of those rejections you typically see on your desk? Is it accounting errors, debt-to-income, unpaids on their bank statements, or what typically kills the deal?",
        "cue": "Prospect diagnoses their own floor's actual rejection reasons.",
        "stageNote": "Validates what factors are killing their bank submissions."
      },
      {
        "id": "clarify-crm-graveyard",
        "phase": 1,
        "phaseName": "PHASE 1: DIAGNOSIS",
        "section": "2. C — The CRM Graveyard (3:15 - 4:00)",
        "type": "rep",
        "speaker": "Rep",
        "text": "So right now, they basically sit in your CRM graveyard, and that marketing spend is 100% written off?\n\nAnd when that decline comes through—is it your desk that has to deliver the bad news to the buyer, or does the sales executive handle it?\n\nI hear that every day. You spend 45 minutes capturing the deal, structuring the file, chasing 3 months of bank statements—only to do unpaid administrative therapy for someone who can't get approved.",
        "cue": "Prospect expresses frustration with awkward conversations and wasted desk hours.",
        "stageNote": "Validate their frustration. Builds deep alliance with the desk."
      },
      {
        "id": "label-problem-bleed",
        "phase": 1,
        "phaseName": "PHASE 1: DIAGNOSIS",
        "section": "3. L — Label the Problem (4:00 - 4:45)",
        "type": "rep",
        "speaker": "Rep",
        "text": "So let me play the board back to you to make sure I have this 100% accurate:\n\nYou're submitting roughly {{monthly_apps}} applications a month.\n{{decline_rate}}% are getting turned down by the banks.\nThat is {{declined_units}} prospective buyers every single month who walked into your showroom, picked a vehicle, signed paperwork, and were ready to buy—who then walked out empty-handed.\n\nEven at a conservative gross profit of {{avg_margin}} per unit between the metal, doc fees, and finance commission...\n\nThis floor is forfeiting roughly {{monthly_bleed}} in gross profit every single month to bank algorithms.\n\nThat is what we call the 50% Fallout Bleed.\n\nHow long has your floor been bleeding that gross?",
        "cue": "Pause firmly for 2 seconds. Let the {{monthly_bleed}} figure sit in silence.",
        "stageNote": "Eye contact. Never apologize for their real numbers."
      },
      {
        "id": "overview-past-attempts",
        "phase": 1,
        "phaseName": "PHASE 1: DIAGNOSIS",
        "section": "4. O — Overview Past Experience (4:45 - 5:45)",
        "type": "rep",
        "speaker": "Rep",
        "text": "And over that time—has your dealership attempted anything internally or worked with third parties to recover those declined customers, or has the file just stayed dead?\n\n[If they say No]: Why is that?\n\nMakes total sense. But let me ask you: If your floor was able to get even 15 or 20 of those turned-down buyers back as approved deals... roughly how much gross revenue would that represent for this store?\n\nAnd how would banking an extra R300k+ in recovered margin every single month change your business?\n\nSo what is currently stopping you guys from actually making that money back right now?",
        "cue": "\n",
        "stageNote": "\n",
        "_isCustomEdited": true
      },
      {
        "id": "vacation-origin-mission",
        "phase": 2,
        "phaseName": "PHASE 2: SELLING THE VACATION",
        "section": "5. S — Origin & 80% Approval Mission (5:45 - 6:45)",
        "type": "rep",
        "speaker": "Rep",
        "text": "That exact problem is actually why our company exists.\n\nWe originally started as Volve Media—an automotive advertising agency. We spent years generating thousands of leads for dealerships across South Africa. The ads worked, the showrooms were full, but month after month, Dealer Principals kept telling us:\n'Guys, the leads are here, but over half of them are getting declined at the bank.'\n\nThat's when we made a decision: we didn't just want to be another marketing agency dumping raw traffic onto an F&I desk. We decided to solve the credit bottleneck directly so we could become the only agency in the country delivering an 80%+ bank finance approval rate on the buyers we bring in.",
        "cue": "\n",
        "stageNote": "\n",
        "_isCustomEdited": true
      },
      {
        "id": "vacation-core-philosophy",
        "phase": 2,
        "phaseName": "PHASE 2: SELLING THE VACATION",
        "section": "5. S — Financing is Math & Risk (6:45 - 7:45)",
        "type": "rep",
        "speaker": "Rep",
        "text": "When we first set out to crack this, we honestly thought there was nothing we could do—we assumed bank underwriting was this magic secret that nobody outside the banking halls could ever understand, and that the leads were doomed forever.\n\nBut we realized that's not completely true.\n\nWhat we discovered is that it's actually not a mystery at all:\nVehicle financing is purely a math and risk management problem.\n\nThe banks actually want to approve more cars—they make zero profit when they decline your customer. But they need to ensure they don't lend money to people who show behavioral signs of defaulting. The banks determine that by checking key specific factors that we have narrowed down to an exact science.",
        "cue": "Prospect nods in agreement. They know banks want interest but follow scorecards.",
        "stageNote": "Confident, authoritative tonality. You are speaking as financial engineers."
      },
      {
        "id": "vacation-two-buckets",
        "phase": 2,
        "phaseName": "PHASE 2: SELLING THE VACATION",
        "section": "5. S — The Two Buckets (7:45 - 8:30)",
        "type": "rep",
        "speaker": "Rep",
        "text": "Now, to be completely transparent: not every declined buyer can be saved.\n\nThe very first thing our underwriting desk does when a file enters our system is split them into two distinct buckets:\n\nBucket 1: The Truly Unrecoverable. People under active administration, formal debt review (Section 86), active court judgments, or zero verifiable income. There is no legal mechanism to put them in a car right now. We do not touch them, and we will never waste your time pretending we can.\n\nBucket 2: The Recoverable Pipeline. These are real, employed buyers with stable salaries and genuine purchase intent, but who tripped automated bank tripwires.\n\nThis second bucket represents 70% to 80% of your showroom turn-downs. This is the only place we operate.",
        "cue": "Prospect: 'Thank goodness, they're not trying to push debt-review buyers onto my floor.'",
        "stageNote": "Firm boundary. DPs respect operators who say no to bad business."
      },
      {
        "id": "vacation-three-questions",
        "phase": 2,
        "phaseName": "PHASE 2: SELLING THE VACATION",
        "section": "5. S — The 3 Questions Every Bank Asks (8:30 - 9:30)",
        "type": "rep",
        "speaker": "Rep",
        "text": "When a bank looks at your declined customer, they aren't looking at some mysterious code. Their algorithm is really just asking three simple questions:\n\n1. The Debt Question:\n'Does this person owe anyone money right now, and are they actually paying the people they owe on time—or are there unpaid accounts and old arrears hanging over their head?'\n\n2. The Bread Question:\n'After they've paid everyone they owe, do they have enough money left over to pay our vehicle installment every month and still buy bread for their family for the next 30 days?'\n\n3. The Conduct Question:\n'And day-to-day, how does this person actually live with their money? Are debit orders bouncing, are they living inside an overdraft with zero buffer—or do their bank statements show someone who manages cash responsibly?'\n\nIf an applicant fails even one of those three questions, the bank's system kicks them out.\n\nSimply put: what Credit Builder Flow does is get your declined buyers to live their lives for 90 days as if they already own the vehicle. We clean up their accounts, fix their cash buffer, eliminate unpaids, and simply prove to the banks that they can comfortably afford this car.",
        "cue": "Prospect recognizes that clean 90-day conduct unlocks bank approvals.",
        "stageNote": "Count 1, 2, 3 on your hands. The 'buy bread for 30 days' line lands hard."
      },
      {
        "id": "vacation-three-timelines",
        "phase": 2,
        "phaseName": "PHASE 2: SELLING THE VACATION",
        "section": "5. S — The 3 Recovery Timelines & Case Studies (Slide 11)",
        "type": "rep",
        "speaker": "Rep",
        "text": "Because every customer's financial profile is unique, every single lead you refer to us falls into one of three distinct categories:\n\nCategory 1: Deep Restructuring (6 Months+)\nDealerships typically hate this category because it takes the longest to pay out, but roughly 10% to 20% of your turned-down paper lands here. A great example is Lawrence. His Debt-to-Income ratio was over 80% of his salary. The reason a lead like Lawrence takes 6 months is because when someone has a mountain of bills, all their money goes to debt service. You can't show affordability while someone is drowning in debt payments. First 60 days: we aggressively restructure and pay down debt. Next 90 days: he lives with clean bank conduct to prove surplus cash flow. 60 days to clear debt + 90 days of clean banking = roughly 6 months to turn a dead file into a banked delivery.\n\nCategory 2: The Core (90 Days)\nThis is the meat and potatoes of your turned-down paper—roughly 70% to 80% of all the leads you refer will fall right here. A great example is Busi. He had substantial arrears, but his real bottleneck was banking conduct—unpaids and an overdraft that gave him a near-zero approval probability. Settling debt is only half the battle; banks demand three consecutive months of clean statement conduct. First 30 days: settled arrears and waited for the 30-day bureau cycle. Simultaneously over 90 days: coached him through three months of disciplined banking, living as if he already paid the car installment. On day 90, fresh prime-grade statements were pulled, re-applied on Signio, and funded.\n\nCategory 3: Quick Wins (45 to 60 Days)\nThese are the fastest turnarounds—roughly 10% of leads land here. A great example is Khumbuzile. Earning over R25,000 a month with flawless banking conduct, but declined across all lenders over a three-month overdue MTN account for just R300. His banking habits and affordability were already solid. The only bottleneck was bureau lag: creditors and bureaus only reconcile ledgers once a month on billing cycles. Immediate settlement of the R300 + 30-day reporting cycle. By day 45, his credit record was clear, re-captured on Signio, and approved immediately.\n\nNotice that across all three leads—Lawrence, Busi, and Khumbuzile—we never asked the dealership to wait with them or do any work. You sent the referral link, our desk managed the calendar, and your floor banked the delivery.",
        "cue": "Prospect absorbs the 3 realistic timelines without false promises.",
        "stageNote": "Deliver Lawrence, Busi, and Khumbuzile with steady 30-second cadence."
      },
      {
        "id": "vacation-zero-lift",
        "phase": 2,
        "phaseName": "PHASE 2: SELLING THE VACATION",
        "section": "5. S — Zero-Lift Desk Reality (Direct Callback)",
        "type": "rep",
        "speaker": "Rep",
        "text": "Remember when you told me earlier that right now, when a deal declines, your desk has to deliver the bad news, do unpaid therapy, and the lead just dies in your CRM?\n\nHere is how we change that completely:\n\nInstead of doing any of that, your team now only does one single thing: you just send our referral link to the customer. That's it.\n\nFrom that exact second, our team takes over and handles everything else off-site. You don't counsel them. You don't audit statements. We work with the customer directly to resolve the limiting blockages that caused the decline in the first place.\n\nThe next time your desk touches that file, you simply re-submit the application to the banks on Signio—only now, with a clean, bank-ready profile that gets approved.\n\nSend a link -> take the approval -> deliver the vehicle.",
        "cue": "Prospect realizes this removes work from their desk rather than adding to it.",
        "stageNote": "Stress the phrase 'one single thing: send the link.' F&Is love zero admin."
      },
      {
        "id": "vacation-exclusivity",
        "phase": 2,
        "phaseName": "PHASE 2: SELLING THE VACATION",
        "section": "5. S — Lead Exclusivity: Worst-Case Socratic Lock",
        "type": "rep",
        "speaker": "Rep",
        "text": "Now, the first question every sharp Dealer Principal and F&I asks is:\n'What stops you from taking my rehabilitated buyer and selling them to the dealership down the road?'\n\nLet's actually play that worst-case scenario out together:\n\nAssuming we did that scummy thing—we took your declined buyer, cleaned them up, and shopped them to your competitor down the road. And you inevitably found out. What would be your immediate next move?\n\n[Wait for Dealer/F&I to answer: 'I'd stop working with you immediately, cancel the agreement, and kick you out.']\n\nExactly. And in the South African dealership community—because everyone knows each other and DPs talk—what happens next when you tell your network and your friends in the industry what we did?\n\n[Wait for Dealer/F&I: 'Nobody would work with you. You'd be blacklisted.']\n\n100%. So how long do you think our business would survive in this market playing that game?\n\n[Dealer/F&I: 'Not very long. You'd be out of business in a few months.']\n\nSpot on. It's commercial suicide. Now contrast that with the real math: If we honor complete exclusivity, keep every lead locked to your showroom, and rehabilitate 20, 30, 50 of your turned-down buyers every year at R6,000 to R10,000 a deal... how much more money do we make together over the next 3 to 5 years?\n\n[Dealer/F&I: 'Hundreds of thousands. Way more than flipping a single deal.']\n\nExactly. Morals aside, the pure economics guarantee that we only win when that car drives off YOUR showroom floor. That is why our exclusivity is legally hardcoded into our bilateral pilot agreement.",
        "cue": "Dealer/F&I explicitly states that stealing leads is commercial suicide.",
        "stageNote": "Let them answer each question. Do not skip the Socratic responses."
      },
      {
        "id": "vacation-commercials",
        "phase": 2,
        "phaseName": "PHASE 2: SELLING THE VACATION",
        "section": "5. S — Performance Commercials & Destination Math",
        "type": "rep",
        "speaker": "Rep",
        "text": "Here is how our commercial partnership is structured:\n\n• Vehicles under R130,000: Flat handling fee of R6,000 upon successful delivery.\n• Vehicles R130,000 and above: 5.0% of the vehicle retail price upon successful delivery.\n\n• R0 Upfront cost.\n• R0 Monthly retainers.\n• R0 Platform or tech fees.\n\nOur fee is payable ONLY once the vehicle is delivered and funded by the bank. If that customer does not take delivery of a car from your floor, you owe us absolutely nothing.\n\nAnd destination math: Right now, you've got roughly {{declined_units}} turned-down files in your CRM graveyard generating exactly R0. Even if our desk only recovers {{recovered_units}} of those buyers a month, that is roughly {{recovered_revenue}} in net new gross profit and F&I commission that was otherwise dead money.\n\nYou are essentially unlocking found money at zero capital risk.",
        "cue": "Prospect realizes they have zero capital exposure and high upside.",
        "stageNote": "Rhythmically hit the R0 lines. Transition to the close."
      },
      {
        "id": "close-authority-check",
        "phase": 3,
        "phaseName": "PHASE 3: RESOLUTION & CLOSE",
        "section": "6. E — Authority Litmus Check (10:00 - 10:45)",
        "type": "rep",
        "speaker": "Rep",
        "text": "Now, [Name], when it comes to plugging in an off-site recovery desk to rescue these declined files—is that a workflow you have the authority to green-light yourself on your desk, or does every service agreement go strictly through the Dealer Principal?",
        "cue": "Branch:\nIf DP -> Proceed directly to the Layup & 3 Decisions.\nIf F&I -> 'Makes complete sense. If this were entirely your decision and [DP] had already approved the budget, would you personally want this on your desk this month?'",
        "stageNote": "Now that they love the vacation, authority qualification has zero friction."
      },
      {
        "id": "close-dp-layup",
        "phase": 3,
        "phaseName": "PHASE 3: RESOLUTION & CLOSE",
        "section": "6. E — The Dealer Principal Layup (10:45 - 12:00)",
        "type": "rep",
        "speaker": "Rep",
        "text": "[DP Name], I hear you 100%.\n\nWhenever a dealer principal tells me they need time to weigh this up, I always have this visual of them sitting alone in their office tonight with a cup of coffee, staring at the ceiling for two hours weighing this up.\n\nBut you and I both know that's not what happens.\n\nWhat actually happens is: you walk out of this room, someone corners you about a trade-in appraisal, a customer has a complaint on delivery, you've got floorplan interest to review, and you spend the rest of the day putting out fires.\n\nNext week, your F&I hands you the weekly pack. You see another 10 to 15 bank turn-downs on the sheet. The cycle repeats, and two months from now, life made the decision for you by default—and the store is in the exact same spot, bleeding {{monthly_bleed}} every month.\n\nInstead of letting the calendar make that call for you, let's look at the only three decisions that are actually on the table today:",
        "cue": "Pause 1s after 'staring at the ceiling'. Watch for their smile or nod.",
        "stageNote": "Warm, conversational, slightly amused tonality. Never confrontational."
      },
      {
        "id": "close-three-decisions",
        "phase": 3,
        "phaseName": "PHASE 3: RESOLUTION & CLOSE",
        "section": "6. E — The 3 Decisions Anchor (12:00 - 13:30)",
        "type": "rep",
        "speaker": "Rep",
        "text": "Decision 1: You choose not to work with us.\nNothing changes. Your desk continues to let turned-down buyers walk, and this store continues to forfeit roughly {{monthly_bleed}} in retail gross every month to bank algorithms.\n\nDecision 2: You test us, and we fall flat on our face.\nWe take your declined files from last week, we don't recover a single vehicle, and we fail. Because we take zero upfront fees and our portal handles the heavy lifting, your desk lost zero selling hours, your banks were untouched, and you paid zero retainers. You are in the exact same spot you're in right now.\n\nDecision 3: It works exactly like we showed you.\nWe take the {{declined_units}} buyers your banks turned down, our underwriters remediate the bureau blockers, and we put just {{recovered_units}} extra banked deals over your curb this month. That's {{recovered_revenue}} in retained gross profit that was already written off as dead money.\n\nBetween Decision 1 and Decision 2, your downside is identical—you lose nothing. But Decision 3 puts {{recovered_units}} extra units on your board every month.\n\nIf a decision carries zero downside, why not make the call that actually has the upside for your floor?",
        "cue": "Deliver seamlessly without asking permission between decisions.",
        "stageNote": "Let the logic sink in. Hold eye contact."
      },
      {
        "id": "close-sandbox-pilot-lock",
        "phase": 3,
        "phaseName": "PHASE 3: RESOLUTION & CLOSE",
        "section": "7. R — The 30-Day Sandbox Pilot Lock (13:30 - 15:00)",
        "type": "rep",
        "speaker": "Rep",
        "text": "Look [Name], we don't need a complex multi-year contract or a massive operational rollout to prove this works.\n\nHere is what I propose: Let's do a 30-Day Sandbox Pilot. Send our desk 5 to 10 of last week's dead, declined files—customers who walked off your lot and who you've already written off as lost revenue.\n\nWe will onboard them, separate the unrecoverable files, and put the recoverable buyers onto their rehabilitation track. If we don't produce clean, pre-approved buyers ready to take delivery from your floor, you walk away having spent zero Rand.\n\nCan we grab 5 of last week's declined files off Signio today so we can get started?",
        "cue": "Prospect agrees to pull 5 files to test.",
        "stageNote": "Lock the operational next step. Keep friction at absolute zero."
      }
    ],
    "objections": [
      {
        "id": "obj-dp-think",
        "title": "I need to think about it",
        "triggerKey": "D",
        "regexPattern": "\\b((i|we) (need|want|have) to think about it|let (me|us) think about it|(i'll|we'll) think about it|mull it over|sleep on it|get back to you|look over the weekend)\\b",
        "bulletSummary": "The Coffee vs Daily Fires Layup -> The 3 Decisions Frame",
        "repScript": "I hear you 100%. Whenever a dealer principal tells me they need to think about it, I picture them sitting with a coffee tonight weighing it up... But fires take over, life makes the decision by default, and next month another R500k bleeds out. Let's look at the only 3 actual decisions on the table: Inaction (Guaranteed bleed), Failure (Zero cost/zero risk), Success (5 extra units / R100k gross). Since downside is zero, why not choose the upside?"
      },
      {
        "id": "obj-fni-approval",
        "title": "Need DP approval",
        "triggerKey": "F",
        "regexPattern": "\\b(speak to (the )?(dp|dealer principal|owner|boss|md)|get (the )?approval|need (an? )?approval)\\b",
        "bulletSummary": "Authority Litmus Test -> Forwardable 1-Page Portal Briefing",
        "repScript": "Makes complete sense. If this were entirely your decision and [DP] had already approved the budget, would you personally want this on your desk this month?\n\nIf Yes: 'Awesome. Don't try to explain our clearance legalities while he's busy. I will send you a 3-line email with our dealership portal link (volvemedia.com). You forward it, and we do a 10-minute briefing together where I take the heat on the numbers.'"
      },
      {
        "id": "obj-fee-pushback",
        "title": "Margin is too thin",
        "triggerKey": "M",
        "regexPattern": "\\b(too expensive|cut (the )?fee|reduce (the )?fee|commission is too high)\\b",
        "bulletSummary": "80% of Something Rule (Verbal Lever)",
        "repScript": "I hear you completely. On entry-level budget units under R100k, margins can be tight. We are partners, not parasites. If you have a specific distressed unit where the standard fee squeezes the deal, your F&I just flags it with our desk prior to delivery. We adjust reasonably so the store always makes a healthy profit. Remember: 80% of something is infinitely better than 100% of a dead decline."
      },
      {
        "id": "obj-timeline",
        "title": "90 days is too long",
        "triggerKey": "T",
        "regexPattern": "\\b(90 days is too long|three months is too long|take too long|customer will walk)\\b",
        "bulletSummary": "Signio-Wide Decline Lock",
        "repScript": "That would be true if the customer was financeable today. But remember: they were turned down on Signio across all 4 major banks. They cannot buy from your competitor today either. When their credit is fixed legally by our desk, they buy from the dealership that helped them—which is you."
      },
      {
        "id": "obj-data-buyer",
        "title": "Competitor buys declines",
        "triggerKey": "C",
        "regexPattern": "\\b(buy (our )?data|sell (our )?leads|r500 per lead|cash for leads)\\b",
        "bulletSummary": "R500 Coffee Money vs R20,000 Deal Gross",
        "repScript": "If you sell 50 decline leads for R500, you make R25k once, but surrender those customers forever to a broker who finances them at another dealership. With our model, recovering just 2 of those 50 deals puts R40,000+ in vehicle gross into your account while keeping your customer. Would you rather make R500 in coffee money, or R20,000 keeping your buyer?"
      }
    ]
  },
  "coldcall": {
    "blocks": [
      {
        "id": "cc-switchboard",
        "phase": 1,
        "phaseName": "STAGE 1: GATEKEEPER / RECEPTIONIST",
        "section": "",
        "type": "dialogue",
        "speaker": "Thompson & Receptionist",
        "text": "Thompson: \"good Afternoon How are you?\"\nReceptionist: \"Good thanks, and you?\" or (Im alright.)&nbsp;\nThompson: \"Good, thanks./Glad to hear\n&nbsp;You're speaking to Thompson here. I need a little bit of assistance from you, please.\"\n\nReceptionist: \"How can I assist you?\"\nThompson: \"Can you Please connect me to the FNI desk,?\"\nReceptionist: \"What is it regarding?\"\n[Pop up Card 'S' on keyboard: \"What is this regarding?\"]",
        "cue": "If screened with 'What is it regarding?': Hit [S] on keyboard for Card. Once patched through: Advance to Stage 2.",
        "stageNote": "Senior, calm, peer familiarity. Never pitch the gatekeeper.",
        "_isCustomEdited": true
      },
      {
        "id": "cc-formality",
        "phase": 2,
        "phaseName": "STAGE 2: OPENING FORMALITY",
        "section": "\n\n",
        "type": "rep",
        "speaker": "Rep",
        "text": " Good Morning, [Name] ↘\n\nyou speaking to Thompson , with Credit Builder Flow ↘\n\nHow are you? ↘",
        "cue": "[TOTAL SILENCE] Do NOT pitch yet. Wait for prospect: 'Good thanks / Fine, and you?'",
        "stageNote": "3-Beat Cadence. 0.5s pause between lines. Downward pitch on 'you'. Never roll words together.",
        "_isCustomEdited": true
      },
      {
        "id": "cc-value-statement",
        "phase": 3,
        "phaseName": "STAGE 3: THE VALUE STATEMENT",
        "section": "",
        "type": "rep",
        "speaker": "Rep",
        "text": "I'm good, thank you.\n\nThe reason for my call is we're currently working with the F&I departments in dealerships to help recover the vehicle sales they lose to bank declines.\n\nRight now, when a finance application gets turned down, that customer usually walks out and the deal dies.\n\nWhat we do is take those dead turn-downs, fix what caused them to get rejected by the banks, and send that buyer right back to you, the F&I, so you can deliver the car—without any additional work for your team.",
        "cue": "Prospect listens actively. Do not pause—seamlessly deliver the Ask in the same breath.",
        "stageNote": "Dealer native dialect: 'recover vehicle sales', 'dead turn-downs', 'right back to you, the F&I'. Zero threat to their commission.",
        "_isCustomEdited": true
      },
      {
        "id": "cc-the-ask",
        "phase": 4,
        "phaseName": "STAGE 4: THE ASK",
        "section": "",
        "type": "rep",
        "speaker": "Rep",
        "text": "And I know I called you out of the blue—so instead of me trying to explain the whole process over the phone while you're busy, I have a short 10-minute presentation ready to show you exactly how we can be of service to your dealership.\n\nAll I need from you is the time.\n\nWould Thursday morning or Friday work better for you?",
        "cue": "Assumptive day/time choice. Listen for day preference or objection.",
        "stageNote": "Preempts 'how do you do that?' by explicitly offering the 10-minute presentation. Binary day close.",
        "_isCustomEdited": true
      },
      {
        "id": "cc-email-close",
        "phase": 5,
        "phaseName": "STAGE 5: MEETING LOCK & KEA HAND-OFF",
        "section": "",
        "type": "rep",
        "speaker": "Rep",
        "text": "100%, that’s locked in for [Day] at [Time].\n\nWhat’s your best direct email address so I can get your calendar invite through?\n\n(Prospect provides email)\n\nAwesome—let me just spell that back to make sure I don't miss a character: [spell email back], correct?\n\n(Prospect confirms)\n\nPerfect. And what is your direct cell or WhatsApp number?\n\nThe reason I ask is that dealership email firewalls often filter external calendar links into spam, and the last thing we want is technical delays eating into your floor time when you have deliveries to handle. We just ping the 1-click meeting link to your WhatsApp 5 minutes before so you can jump straight on without hassle.\n\n(Prospect provides cell/WhatsApp)\n\nSpot on. I’m handing your file over to Kea, our Partnership Manager. He’s going to send the invite and a 2-minute overview directly to your inbox right now.\n\nPlease just hit 'Accept' on the invite when it pops up so your slot is reserved on Kea's calendar.\n\nThanks for your time, [Name], Kea will be in touch shortly. Have a productive day on the floor!",
        "cue": "Collect and spell-check email. Justify WhatsApp with corporate firewall & floor time protection. Request 'Accept' on calendar.",
        "stageNote": "Email first -> Spell back -> WhatsApp firewall justification -> Kea invite + Accept click.",
        "_isCustomEdited": true
      }
    ],
    "objections": [
      {
        "id": "obj-cc-screen",
        "title": "What is this regarding?",
        "triggerKey": "S",
        "regexPattern": "\\b(regarding what|in connection with|what is (this|it) about|why are you calling)\\b",
        "bulletSummary": "Declined Finance Resubmission Extension Check",
        "repScript": "It's regarding the recovery protocol for bank-declined leads.\n\nIs that still handled by the lead F&i? "
      },
      {
        "id": "obj-cc-email",
        "title": "Send me an email",
        "triggerKey": "E",
        "regexPattern": "\\b(send (me )?(an )?email|email me|send (me )?(a )?brochure|send (it )?on email|mail me)\\b",
        "bulletSummary": "Kea Partnership Manager Hand-Off -> Case Study & Provisional Slot Anchor",
        "repScript": "100%, I’ll have that sent through right now with a case study showing the recovery numbers as well.\n\nI’ll have Kea, our Partnership Manager, send it directly to your inbox and put down [Thursday morning] as a provisional slot. Once you’ve had a quick look, you can just hit reply to Kea and let him know if that time suits you or if another slot works better.\n\nDoes that work for you as well?\n\n(Prospect agrees: 'Yes, that's fine')\n\nAwesome. What’s the best direct email address for Kea to send that to?\n\n(Prospect provides email)\n\nGot it. And is this line your direct cell just in case the brief drops into your spam folder?\n\nPerfect. Kea will pop that through to you shortly. Have a great day!"
      },
      {
        "id": "obj-cc-virtual",
        "title": "Are you coming here?",
        "triggerKey": "V",
        "regexPattern": "\\b(are you coming|come (to |in )?person|visit (us|the dealership)|where are you based|are you in)\\b",
        "bulletSummary": "Saves Time & Energy -> Protects Showroom Walk-Ins",
        "repScript": "No, not at all—we do a quick online meeting.\n\n\n  that way,It saves both of us time and energy—and that way, if a client walks into your office you able to attend to them as effectly as possible,\n\n\n Does Thursday around 10:30 work?"
      },
      {
        "id": "obj-cc-nodeclines",
        "title": "F&I (PRIVATE)\n",
        "triggerKey": "X",
        "regexPattern": "\\b(we (don't|do not) (get|have) declines|we are fine|not an issue|our approvals are (fine|good)|all (our )?deals approve)\\b",
        "bulletSummary": "5-Second High-Status Disqualification",
        "repScript": "Prospect: \"We don't do in-house finance, we use a private F&I company.\"\n\n\n\n\nYou:\n\n\"100%, that makes complete sense—and that’s actually why dealerships in your position work with us.\n\n\n\n\nWhen your private F&I gets a bank decline, they have to drop that file and move on to the next easy deal. They don't have the process to rehabilitate that buyer—which means your dealership loses the vehicle sale.\n\n\n\n\nWe don't replace your external F&I at all. We take those dead declines off their desk, fix what blocked them, and send the approved buyer right back to your private F&I so you can deliver the car.\n\n\n\n\nAre you open to seeing how we plug into your external F&I for 15 minutes this Thursday?\""
      },
      {
        "id": "obj-cc-how",
        "title": " HOW ? ",
        "triggerKey": "H",
        "regexPattern": "\\b(how (do|would) you (do that|do it|work)|how does (it|that) work|what (do|would) you (actually )?do)\\b",
        "bulletSummary": "\n",
        "repScript": "\"Good question—it’s pretty straightforward.\n\nWhat we do first is identify exactly what caused the finance decline, and help the buyer settle or resolve that blocker. Once that's cleared, we make sure the deal actually passes affordability on paper.\n\nFrom there, we send them straight back to your floor so you can run the application.\n\nThis entire process is handled off-site without pulling your dealership into the legwork—saving your team time and resources while keeping your store completely protected.\n\nThe meeting I’m looking to book is just to show you how this works in more depth. Does Thursday or Friday work for you?\""
      },
      {
        "id": "obj-cc-privatefni",
        "title": "We use a private F&I",
        "triggerKey": "F",
        "regexPattern": "\\b(private f(&|and)?i|external f(&|and)?i|outsource(d)? f(&|and)?i|third(-|\\s)?party f(&|and)?i|don('?t| do not) (do|have) in-house|no in-house finance|outside f(&|and)?i)\\b",
        "bulletSummary": "Don't Replace External F&I -> Rehabilitate Dead Declines -> Return Approved Buyer",
        "repScript": "100%, that makes complete sense—and that’s actually why dealerships in your position work with us.\n\nWhen your private F&I gets a bank decline, they have to drop that file and move on to the next easy deal. They don't have the process to rehabilitate that buyer—which means your dealership loses the vehicle sale.\n\nWe don't replace your external F&I at all. We take those dead declines off their desk, fix what blocked them, and send the approved buyer right back to your private F&I so you can deliver the car.\n\nAre you open to seeing how we plug into your external F&I for 15 minutes this Thursday?"
      },
      {
        "id": "obj-coldcall-1791879494893",
        "triggerKey": "?",
        "label": "New Card",
        "title": "NO THANK YOU. ",
        "bulletSummary": "Summary of how to counter this objection...",
        "repScript": "its rare i hear hear someone not interested in increasing the revenue for the dealership,&nbsp;\n\nCan i ask why Kendall.&nbsp; tone is important here.&nbsp;"
      },
      {
        "id": "obj-cc-grouppolicy",
        "title": "Group policy handles this",
        "triggerKey": "G",
        "regexPattern": "\\b(group policy|approved vendor|morgan group|motus|bidvest|head office|procurement|only approved)\\b",
        "bulletSummary": "5-Second Procurement Exit",
        "repScript": "Understood, [Name]. If head office locks down your vendor book, I won't waste your time. Appreciate the directness, have a great day. [Disconnect -> Next Dial]\n\nask questions so you can equip yourslef for the next person in the future. "
      },
      {
        "id": "obj-cc-transunion",
        "title": "Clients handle TransUnion",
        "triggerKey": "T",
        "regexPattern": "\\b(transunion|sort (it )?out themselves|client('s)? problem|we don't intervene|credit bureau themselves)\\b",
        "bulletSummary": "Walked Gross vs TU Score -> Tier-1 Return in 60 Days",
        "repScript": "100%—and no F&I should be acting as a debt counselor. But when a buyer walks out to \"sort out TransUnion,\" 9 times out of 10 they vanish or go Rent-to-Own, which costs you the entire sale.\n\n\nWe have a process that actually gets them back to your showroom after they fix the specific blocker, so I'm looking to book a meeting to show you exactly how we do that.\n\n\n\n\nDoes Thursday or Friday work for you?"
      },
      {
        "id": "obj-cc-popia",
        "title": "POPIA",
        "triggerKey": "P",
        "regexPattern": "\\b(popia|popi act|privacy|rogue|scam|burnt our fingers|personal information|data protection|third party)\\b",
        "bulletSummary": "Customer Consent & F&I Rejection Form Shield",
        "repScript": "I'm happy you care about your customers—we actually don't contact leads without their consent. The way we get a hold of them in the first place is through a form they fill out on their own, which your F&I sends after informing them they got rejected for financing. That completely protects the dealership and ensures you don't share any personal data. That's actually one of the parts we were going to walk through in our meeting—what time did you prefer?"
      }
    ]
  },
  "coldcall_followup": {
    "blocks": [
      {
        "id": "cc-fu-assumption",
        "phase": 1,
        "phaseName": "STAGE 1: THE ASSUMPTION FRAME & DISARM",
        "section": "Ghost Recovery Touchpoint",
        "type": "rep",
        "speaker": "Rep",
        "text": "Hey [Name], Kea here from Credit Builder Flow, how are you?\n\nGlad to hear it, thanks. Look, we had a meeting scheduled for last week, and I’m assuming a client walked onto the showroom floor right as we were supposed to jump on, so you couldn't make it?",
        "cue": "Assume life and showroom fires got in the way. Zero guilt or blame. Listen for tone.",
        "stageNote": "Calm, friendly, non-needy tonality. Never sound offended or accusatory.",
        "_isCustomEdited": true
      },
      {
        "id": "cc-fu-priority",
        "phase": 2,
        "phaseName": "STAGE 2: THE PRIORITY CHECK & THE WAY OUT",
        "section": "Funnel Position & Reality Check",
        "type": "rep",
        "speaker": "Rep",
        "text": "I completely understand—customers always come first. Look, the only reason I’m reaching out to you today is because we can only onboard a limited number of dealerships per quarter. Because we already had that meeting booked in, I didn't want to just release your spot to another dealership without speaking to you first.\nSo I just need to know right now: is recovering lost revenue for the dealership still a priority for the dealership right now?",
        "cue": "\"Glad to hear it, thanks.\n\n\n Look, we spoke last week and you asked me to send over that breakdown on how we recover your declined finance applications. Since I didn't hear back, I’m assuming your dealership’s firewall probably ate the email or threw it into your spam folder?\"",
        "stageNote": "Give them an explicit way out. If they want to say no, let them say no cleanly.",
        "_isCustomEdited": true
      },
      {
        "id": "cc-fu-fork",
        "phase": 3,
        "phaseName": "STAGE 3: THE FORK IN THE ROAD",
        "section": "Next Course of Action",
        "type": "dialogue",
        "speaker": "3-Way Action Fork",
        "text": "Okay, great. Since I'm holding this spot open for you, let’s get it moved to tomorrow, Thursday. Does [Time A, e.g., 10:00 AM] or [Time B, e.g., 2:00 PM] work better on your side?\"<i data-path-to-node=\"11,1,0\" data-index-in-node=\"0\">(They pick a time)</i><i data-path-to-node=\"11,1,0\" data-index-in-node=\"0\">\n</i><b data-path-to-node=\"11,2,0\" data-index-in-node=\"0\">You:</b> \"Perfect. Look, to make sure our system officially reserves your spot and doesn't release it, I’m sending the updated meeting link to your email right now while we're on the line. Can you quickly open that up and click <b data-path-to-node=\"11,2,0\" data-index-in-node=\"224\">'Accept'</b> for me so I know for a fact your spot is locked in?",
        "cue": "Yeah, dealership spam filters are notorious for blocking external files.\n\n\n\n\n Look, instead of us going back and forth with emails getting lost in spam, this is why we have meetings \n\n it’s honestly going to be much faster for both of us to just jump on a quick 10-minute screen-share tomorrow.\n\nI can show you the exact workflow right in front of you, and you can decide right there on the call whether it’s worth it for your floor or not. \n\n\n\n\nDo you have a quick 10 minutes tomorrow, Thursday, at 10:00 AM or 2:00 PM",
        "stageNote": "Direct course of action. Either re-lock or cleanly archive.",
        "_isCustomEdited": true
      },
      {
        "id": "cc-fu-relock",
        "phase": 4,
        "phaseName": "STAGE 4: RE-LOCK & PROTOCOL CLOSE",
        "section": "Calendar & WhatsApp Confirmation",
        "type": "rep",
        "speaker": "Rep",
        "text": "Locked in for [Day] at [Time].\n\nKea will update the calendar invite right now. Please do me a favor and hit 'Accept' as soon as you see it so the slot stays reserved.\n\nAnd we'll ping the 1-click link to your WhatsApp 5 minutes before so you don't have to hunt for it on the floor. Speak then, [Name]!",
        "cue": "Sharp. Let me just confirm your email address so the calendar invite doesn't get blocked—is it [read out email]?\n\nOkay, I’m sending that meeting link over right now while we're on the line. Can you quickly open that up and click 'Accept' for me so I know for a fact it bypassed your spam filter and your spot is locked in?\"",
        "stageNote": "Firm commitment. WhatsApp 5-minute link reminder.",
        "_isCustomEdited": true
      }
    ],
    "objections": [
      {
        "id": "obj-fu-notime",
        "title": "Haven't looked at email yet",
        "triggerKey": "H",
        "regexPattern": "\\b(haven't (had )?(time|looked|read)|busy|not yet|didn't get around)\\b",
        "bulletSummary": "Zero Homework Frame -> 10-Minute Screen-Share Shortcut",
        "repScript": "100%, I didn't expect you to do homework between customer deliveries! That's actually why I called—it's much faster for me to just show you the 3-minute workflow on screen this Thursday rather than you reading through PDFs. Would morning or afternoon suit your floor?"
      },
      {
        "id": "obj-fu-resend",
        "title": "Send it again / Didn't get it",
        "triggerKey": "S",
        "regexPattern": "\\b(resend|send (it )?again|didn't (get|receive)|lost the email)\\b",
        "bulletSummary": "Firewall Spam Check -> WhatsApp 1-Click Ping",
        "repScript": "No problem at all—dealership firewalls often filter external links. Let me confirm the spelling of your email: [spell back]. And what's your direct cell? I'll have Kea WhatsApp the 1-click video right now so you have it in your pocket."
      },
      {
        "id": "obj-fu-notinterested",
        "title": "Looked at it, not interested",
        "triggerKey": "N",
        "regexPattern": "\\b(not interested|not for us|we're good|don't need it)\\b",
        "bulletSummary": "Curiosity Pivot -> 100% Approval vs Internal Process Check",
        "repScript": "Understood, [Name]—just so I don't bug you again in the future: is that because your banks are approving 100% of your applications right now, or because your floor already has an internal desk recovering the turn-downs?"
      },
      {
        "id": "obj-fu-delivery",
        "title": "In the middle of delivery",
        "triggerKey": "D",
        "regexPattern": "\\b(with a (client|customer)|delivery|signing|handover|busy on floor)\\b",
        "bulletSummary": "Floor Priority Exit -> Callback Lock",
        "repScript": "Go deliver that car! What time should I ring your desk back—2:00 PM or first thing tomorrow?"
      },
      {
        "id": "obj-coldcall-1792564533106",
        "triggerKey": "?",
        "label": "New Card",
        "title": "PUSHBACK TO A MEETING.",
        "bulletSummary": "THEY PUsh Back to an a meeting still want an email. \n\n",
        "repScript": "<b data-path-to-node=\"17,0,0\" data-index-in-node=\"0\">You:</b> \"No problem at all. Just so it doesn't disappear into the spam folder again—are you currently sitting at your desk right now?\"\n<i data-path-to-node=\"17,1,0\" data-index-in-node=\"0\">(If Yes)</i>: \"Awesome, let me just confirm I have the spelling right: is it <b data-path-to-node=\"17,1,0\" data-index-in-node=\"73\">[read out email]</b>? I’ve just hit send on a fresh copy right now. Can you quickly check your inbox or spam folder while I'm on the line just so we know for a fact it came through?\"\n<i>ill send it right now</i>. Have a look through that today when you get two minutes. Instead of me calling&nbsp; you again, just reply directly to that email to let me know whether or not you want to jump on a quick call. If I don't hear back by Friday, I'll assume it's not a priority for this quarter and take you off my call list. Fair enough?"
      },
      {
        "id": "obj-coldcall-1792564941195",
        "triggerKey": "?",
        "label": "New Card",
        "title": "NOT A PRIOTY NOW ",
        "bulletSummary": "Summary of how to counter this objection...",
        "repScript": "No problem at all, I appreciate you being upfront with me. Like I said, I know how busy the floor gets.\nWhat I’ll do is release your spot for now, and I'll make a note on your file for when our next intake opens up next month [or next quarter]. Are you okay with me reaching back out to you then to see if anything has changed on your side\nAwesome, I'll check in with you then. Have a great rest of your week, [Name]."
      }
    ]
  },
  "cbfleads": {
    "blocks": [
      {
        "id": "cbf-part1-intro",
        "phase": 1,
        "phaseName": "STAGE 1: ACKNOWLEDGE & REASSURE",
        "section": "Part 1: The Referral Hook",
        "type": "rep",
        "speaker": "KEA / Rep",
        "text": "Hi [Name], how's it going?\n\nYou're speaking to KEA, I’m calling from Credit Builder Flow. SupremeAuto referred you to us after your application was rejected.\n\nThey told us your credit might need a bit of work before you can get approved — so we’re here to help with that. Do you have a few minutes?",
        "cue": "Wait for prospect: 'Yes, I have a few minutes / What is this about?'",
        "stageNote": "Warm, reassuring, peer tonality. Frame the call as an exclusive referral partnership from their dealership."
      },
      {
        "id": "cbf-part1-qualify",
        "phase": 1,
        "phaseName": "STAGE 1: ACKNOWLEDGE & REASSURE",
        "section": "Part 1: 3 Diagnostic Questions & Doc Request",
        "type": "rep",
        "speaker": "KEA / Rep",
        "text": "Awesome. I just need to ask you a few quick qualifying questions to see if this service will be able to assist you, and request a few documents from you:\n\n1. How much is your current credit score?\n\n2. Do you know the reason for your rejections?\n\n3. How soon are you looking for a car?\n\nWe're going to analyze your documents and try to understand what the issue is. If you do qualify, one of our consultants will contact you to assist you with your journey.",
        "cue": "Listen actively. Capture credit score, rejection reason, and target timeframe in the Lead Notes.",
        "stageNote": "Collect baseline facts. Do not debate their rejections yet. Request ID, 3-month bank statement, and payslip."
      },
      {
        "id": "cbf-part2-solution",
        "phase": 2,
        "phaseName": "STAGE 2: INTRODUCE CBF SOLUTION",
        "section": "Part 2: 60-90 Day Shot at Approval",
        "type": "rep",
        "speaker": "KEA / Rep",
        "text": "We created something called the Credit Builder Flow — it’s a short, no-risk program that helps you rebuild your score fast and gives you a shot at approval — often within 60–90 days.\n\n[PAUSE — Wait for prospect to respond]\n\nYou’ll get a personalized plan, credit tools, and hands-on support — you can even test it with a 14-day free trial.\n\nSo, if you are tired of getting declined for financing, this is built for you.\n[Reduce tone / soften cadence]\n\nI can quickly explain exactly how it works — would that be helpful?",
        "cue": "Prospect confirms: 'Yes, please explain / How does it work?' (If they are busy, immediately lock an exact callback time).",
        "stageNote": "Downward inflection on 'built for you'. Pitch the 14-day free trial and fast 60–90 day timeline."
      },
      {
        "id": "cbf-closer-clarify-label",
        "phase": 3,
        "phaseName": "STAGE 3: C.L.O.S.E.R. — CLARIFY & LABEL",
        "section": "C & L: The 4 Diagnostic Commitments",
        "type": "rep",
        "speaker": "KEA / Rep",
        "text": "Ok, based on what the finance team said, they rejected you due to the low credit score, meaning if you do not fix this issue, you won't be able to get financing for your vehicle:\n\n1. Are you aware of your score being low? (e.g. accounts in arrears?)\n\n2. Do you know why it's so low?\n\n3. If nothing changes in the next 3 to 6 months, do you think you'll qualify for that car?\n\n4. If I could help you rebuild your score and get approved again in 60 to 90 days — with support along the way — is that something you’d take seriously?",
        "cue": "Prospect commits: 'Yes, I would take that seriously / I need to fix this.'",
        "stageNote": "Label the exact pain point: low credit score = zero financing. Anchor seriousness before presenting the path."
      },
      {
        "id": "cbf-closer-past-trials",
        "phase": 4,
        "phaseName": "STAGE 4: C.L.O.S.E.R. — OVERVIEW PAST TRIALS",
        "section": "O: Past Trials & Errors",
        "type": "rep",
        "speaker": "KEA / Rep",
        "text": "I hear you.\n\nWhat have you tried in the past to solve these credit issues?\n\n...And how did that work out for you?",
        "cue": "Prospect explains previous struggles (e.g. paid bad agencies, tried disputing themselves, ignored it).",
        "stageNote": "Empathize deeply. Let them acknowledge that DIY attempts and past agencies left them stuck in the victim loop."
      },
      {
        "id": "cbf-closer-habits-plan",
        "phase": 5,
        "phaseName": "STAGE 5: C.L.O.S.E.R. — SELL THE VACATION",
        "section": "S: The 3 Key Habits & The Action Plan",
        "type": "rep",
        "speaker": "KEA / Rep",
        "text": "Completely hear you. What we’ve seen with our most successful clients is that they all have these 3 key habits that helped boost their scores:\n\n1. Responsibility (Breaks the victim loop): As soon as they take full responsibility, they stop stalling and start acting.\n\n2. Change of Identity: You no longer become someone who skips payments or feels ashamed. The goal becomes personal.\n\n3. Consistency, not perfection: Lower the fear. Consistency in the first two steps is what unlocks bank approval.\n\nAnd that’s exactly what this program is for — it helps you with all 3.\n[Wait for response]\n\nSo here’s what I’d like to do:\nWe’ll start by pulling your credit report to see exactly what’s holding you back.\nThen, we’ll kick off your 14-day free trial to show you how the process works.\nIf you believe this can help you get the car you want, we’ll keep working together until you’re driving off in your dream car.\n\nSound good?",
        "cue": "Prospect responds: 'Sound good / Yes, let's do it.'",
        "stageNote": "Triggers psychological ownership. If prospect needs deeper emotional grounding, deploy one of the 4 Pillars."
      },
      {
        "id": "cbf-closer-vacation-pillars",
        "phase": 5,
        "phaseName": "STAGE 5: C.L.O.S.E.R. — SELL THE VACATION",
        "section": "S: The 4 Pillars of Readiness (Pitch Library)",
        "type": "rep",
        "speaker": "KEA / Rep",
        "text": "[Deploy the Pillar matching their primary emotional driver]:\n\nA. The Vacation from the 'Shame of the Decline':\n\"Imagine walking into that dealership in 4 months. You aren’t nervous. You aren’t wondering if they’ll say yes. You’ve already seen your audit. You know your data is green. You walk in as the one in control of the deal.\"\n\nB. The Vacation from the 'Taxi / Uber Tax':\n\"The vacation is that first Monday morning where you don't have to stand in the rain at the taxi rank or check your Uber app to see if you can afford to get to work. It’s the 45 minutes you get back every morning with your kids because you have your own keys.\"\n\nC. The Vacation from 'Predatory Interest':\n\"We aren't just getting you a car; we are moving you out of the poverty trap. At 12% interest instead of 25%, you save R1,500 every single month. That’s R18,000 a year back in your pocket for school fees or a real family holiday.\"\n\nD. The Vacation of 'Financial Legitimacy':\n\"Once we fix this for the car, you are in with the banks. This isn't just about a vehicle; it’s about being able to get a home loan or prime credit facility at top tier rates for the rest of your life.\"",
        "cue": "Prospect connects emotionally: 'That's exactly what I need.'",
        "stageNote": "Sell the Experience of Readiness. Never promise illegal 'guaranteed approval'—promise algorithmic readiness."
      },
      {
        "id": "cbf-closer-resell-subscription",
        "phase": 6,
        "phaseName": "STAGE 6: C.L.O.S.E.R. — RESELL & ONBOARD",
        "section": "E & R: The Subscription Reveal & Risk-Free Close",
        "type": "rep",
        "speaker": "KEA / Rep",
        "text": "Awesome! To get there, we use the Flow System:\n\n• Professional Subscription: R399 per month.\n• 14-Day Free Trial: You pay nothing today. We start your Forensic Audit and build your 180-day sequencing map immediately.\n• Active Management: This isn't a one-time fix. We manage your profile every 30 days, adjusting your strategy as the bureaus update, until your data matches the bank's approval algorithm.\n• Risk-Free: If after 14 days you don't believe our map will get you the keys to that [Car Model], you cancel and walk away.\n\nDoes it make sense to invest R399 to stop wasting thousands on a car deal that will never happen?\n\nI'm going to send you the direct link to the app right now where you can upload your documents and information directly so we can get your audit started immediately.",
        "cue": "Send the direct link to the app so the prospect can upload their information and documents directly.",
        "stageNote": "R399 vs R18,000 predatory interest. Risk-free trial. Send direct app upload link."
      }
    ],
    "objections": [
      {
        "id": "obj-cbf-price",
        "title": "Why do I have to pay R399?",
        "triggerKey": "P",
        "regexPattern": "\\b(r399|why do i pay|why must i pay|cost|fee|charge|free|expensive|can't afford|afford)\\b",
        "bulletSummary": "R399 vs R1,500/mo Taxi & Interest Trap (14-Day Free Trial)",
        "repScript": "You pay nothing today — your first 14 days are completely free. If our forensic map doesn't show you the exact route to getting approved for your vehicle, you cancel and pay zero. Once active, R399 a month protects you from spending R1,500 every single month on taxis or paying 28% subprime interest that drains R18,000 extra per year. Does it make sense to test it for free today?"
      },
      {
        "id": "obj-cbf-guarantee",
        "title": "Can you guarantee I get approved?",
        "triggerKey": "G",
        "regexPattern": "\\b(guarantee|guaranteed|promise|100%|sure|definitely|certain)\\b",
        "bulletSummary": "Experience of Readiness & Bank Algorithm Matching",
        "repScript": "No legitimate financial service can legally promise bank approval because the banks make the final lending call. What we guarantee is the Experience of Readiness: we audit your bureau data, identify the exact adverse accounts and DTI ratios triggering bank rejections, and sequence your profile until your data matches the bank's approval algorithm. When you walk back into the dealership, your file is green."
      },
      {
        "id": "obj-cbf-blacklisted",
        "title": "I'm blacklisted / bad credit",
        "triggerKey": "B",
        "regexPattern": "\\b(blacklisted|bad credit|adverse|default|judgment|arrears|low score)\\b",
        "bulletSummary": "Rehabilitation vs Permanent Brand",
        "repScript": "That is exactly why SupremeAuto referred you to Credit Builder Flow! Over 80% of our clients were declined for low scores or adverse listings. Being 'blacklisted' simply means there are adverse listings or outdated default flags on your bureau profile. We pull your full report, dispute errors, negotiate settlements, and rehabilitate your score in 60 to 90 days."
      },
      {
        "id": "obj-cbf-debtreview",
        "title": "Is this Debt Review?",
        "triggerKey": "D",
        "regexPattern": "\\b(debt review|debt counselling|under debt|counsellor|consolidation)\\b",
        "bulletSummary": "NOT Debt Review — No Bureau Freeze or Legal Lock",
        "repScript": "No, absolutely not. Debt review locks your profile and legally prevents you from buying a vehicle or accessing credit for years. Credit Builder Flow does the exact opposite: we do forensic rehabilitation to clean your profile and optimize your debt-to-income ratio so the banks approve your vehicle finance as fast as possible."
      },
      {
        "id": "obj-cbf-scam",
        "title": "Burnt before / tried other agencies",
        "triggerKey": "C",
        "regexPattern": "\\b(scam|scammed|burnt|fraud|tried before|other company|agencies|fly by night)\\b",
        "bulletSummary": "Dealership-Referred & 14-Day Zero-Risk Free Trial",
        "repScript": "I completely understand your caution — there are many operators out there who take money and vanish. That is why SupremeAuto directly partners with us, and that is why we give you a 14-Day Free Trial where you pay R0 today. You only stay if you see real forensic audit results and a step-by-step sequencing plan for your vehicle."
      },
      {
        "id": "obj-cbf-timeline",
        "title": "How long will this take?",
        "triggerKey": "T",
        "regexPattern": "\\b(how long|time|timeline|urgent|need car now|today|fast|waiting)\\b",
        "bulletSummary": "60–90 Day Window vs Endless Dead Declines",
        "repScript": "Right now, walking into another dealership will just trigger another bank rejection and pull your credit score down further. With our sequencing map, most clients achieve bank-ready status within 60 to 90 days. We start your forensic audit within 24 hours of receiving your documents so we don't waste a single day."
      }
    ]
  },
  "precall": {
    "title": "PRE-SESSION MENTAL RITUAL // COLD CALL OPERATOR",
    "subtitle": "Trading psychology applied to cold outreach: Detach from the outcome. Execute the system.",
    "identity": {
      "headline": "1. THE OPERATOR IDENTITY (THE MISSION)",
      "coreTruth": "You are not a telemarketer begging for minutes. You are an institutional Deal Desk partner rescuing R500,000/month in gross profit bleed for car dealerships.",
      "zeroStakes": "The Zero-Stakes Reframe: You have already lost the sale before you pick up the phone. You cannot lose what you do not have. Every conversation is house money."
    },
    "bellCurve": {
      "headline": "2. THE STATISTICAL BELL CURVE (WHAT YOU WILL ENCOUNTER)",
      "tiers": [
        {
          "name": "The Noise",
          "percent": "30%",
          "color": "#94A3B8",
          "behavior": "Dead numbers, carrier disconnects, voicemails, gatekeeper holds.",
          "mindset": "Pure operational friction. Log 'N/A' and advance immediately. Zero emotion."
        },
        {
          "name": "The Mismatch",
          "percent": "20%",
          "color": "#F59E0B",
          "behavior": "Cash-only dealerships, B2B trade wholesalers, buy-only desks.",
          "mindset": "Fast disqualification in <15 seconds. Wish them well and save your energy."
        },
        {
          "name": "The Cynics",
          "percent": "15%",
          "color": "#EF4444",
          "behavior": "Instant hangups, aggressive brush-offs, sarcastic mockery (e.g. AB).",
          "mindset": "Not personal. They suffer cold-call fatigue. Smile, don't argue, advance."
        },
        {
          "name": "The Battlefield",
          "percent": "25%",
          "color": "#38BDF8",
          "behavior": "Scepticism, 'Send me an email', 'We use private F&I', 'Why?'.",
          "mindset": "Hold the tension. This is where skill earns the meeting. Don't rush to exit."
        },
        {
          "name": "The Golden 10",
          "percent": "10%",
          "color": "#10B981",
          "behavior": "Open, bleeding margin, ready to lock a time (e.g. Yugen, Nerissa).",
          "mindset": "The reward. Your only job is sifting through the list with rhythm to find them."
        }
      ],
      "traderLaw": "Law of Large Numbers: A trader never gets emotional when a stop-loss triggers. A rude prospect is just the transaction fee required to cash the next 10% winner."
    },
    "improvements": {
      "headline": "3. WEEK 1 HARD-LEARNED UPGRADES (THE NON-NEGOTIABLES)",
      "rules": [
        {
          "rule": "MALE VOICE = IMMEDIATE DECISION MAKER ASSUMPTION",
          "desc": "9/10 independent dealers answering a cell/direct line are the DP or F&I. Never ask 'Can I speak to F&I?'—skip Stage 1 and pitch immediately."
        },
        {
          "rule": "LOCK THE CLOCK-TIME (NO FLOATING WINDOWS)",
          "desc": "Never settle for 'Thursday morning'. Offer two exact clock times: 'Does Thursday at 10:00 AM or Friday at 2:30 PM suit you better?'"
        },
        {
          "rule": "INSTITUTIONAL BRANDING AUTHORITY",
          "desc": "Speak with crisp authority: 'Credit Builder Flow's deal desk', never stumble or say 'Credible'."
        },
        {
          "rule": "DON'T SURRENDER TO 'SEND AN EMAIL'",
          "desc": "Bridge the ask: '100%, I’ll send the breakdown right now and hold Thursday at 10:00 AM so we can review it together. Does that work?'"
        },
        {
          "rule": "PRIVATE F&I IS A COMMISSION TARGET",
          "desc": "Off-site F&Is want extra approvals. Don't hang up—ask for their off-site broker's name and direct contact line."
        }
      ]
    },
    "somatic": {
      "headline": "4. PHYSIOLOGICAL GROUNDING & VOCAL CADENCE",
      "boxBreathing": "4-4-4-4 Box Breathing: Inhale 4s • Hold 4s • Exhale 4s • Hold 4s. Drops cortisol, resets working memory.",
      "vocalPitch": "Drop vocal tone ↘ half an octave. Downward inflection on names and greetings. Never roll words together.",
      "tension": "Hold the Tension: Silence is not danger; tension is where decisions are made. Resist the urge to rush to exit."
    }
  },
  "tokens": {
    "monthlyApps": 50,
    "declineRate": 50,
    "declinedUnits": 25,
    "avgMargin": 20000,
    "recoveredUnits": 5,
    "monthlyBleed": 500000,
    "annualBleed": 6000000,
    "recoveredRevenue": 100000
  },
  "blocks": [
    {
      "id": "intro-frame",
      "phase": 1,
      "phaseName": "PHASE 1: DIAGNOSIS",
      "section": "1. Introduction (0:00 - 0:45)",
      "type": "rep",
      "speaker": "Rep",
      "text": "Hey [Name], appreciate you making the time today. I know how busy it gets, floor so I'm going to respect your clock and keep this strictly to 15 minutes.\n\njust need to set the agenda for the meeting : I want to ask a few quick questions about how your finance pipeline is currently running to get a better understanding of your dealership and how your team handles the Rejcted leads. \n\nthen once that is we can just jump to the presentation on how we solved this problem for dealerships around the arear, sounds fair enough? \n",
      "cue": "Wait for prospect: 'Fair enough / Sounds good.'",
      "stageNote": "Relaxed, peer-to-peer tonality. Do not rush.",
      "_isCustomEdited": true
    },
    {
      "id": "clarify-why-now",
      "phase": 1,
      "phaseName": "PHASE 1: DIAGNOSIS",
      "section": "\n2. C — Clarify  (0:45 - 1:30)",
      "type": "rep",
      "speaker": "Rep",
      "text": "Awesome. \nIm going to assume you guys are on Auto trader, Cars and social media right.? ",
      "cue": "Listen actively. Note their exact words (e.g. 'Signio declines', 'unpaids', 'high DTI').",
      "stageNote": "Let them talk without interrupting. Note down their exact vocabulary.",
      "_isCustomEdited": true
    },
    {
      "id": "clarify-golden-numbers",
      "phase": 1,
      "phaseName": "PHASE 1: DIAGNOSIS",
      "section": "\n2. C — The 3 Golden Numbers (1:30 - 2:30)",
      "type": "rep",
      "speaker": "Rep",
      "text": "right and out of those ads how many applications is the D generating on a monthly baises? \n\n1. Roughly how many finance applications is your floor submitting to the banks every month across all lenders?\n\n2. And of those, what percentage would you say are coming back system-declined or turned down on affordability?\n\n3. Got it. So out of {{monthly_apps}} applications, you've got roughly {{declined_units}} people a month getting turned down. What is your team's standard process for those {{declined_units}} customers right now once that decline pops up on Signio?",
      "cue": "Prospect answers: 'Nothing really, the deal just dies / we move on to the next lead.'",
      "stageNote": "Input their exact numbers in the left HUD calculator immediately.",
      "_isCustomEdited": true
    },
    {
      "id": "clarify-root-cause",
      "phase": 1,
      "phaseName": "PHASE 1: DIAGNOSIS",
      "section": "2. C — Root Cause Diagnostic (2:30 - 3:15)",
      "type": "rep",
      "speaker": "Rep",
      "text": "When your leads get rejected by the banks, what is the biggest causation of those rejections you typically see on your desk? Is it accounting errors, debt-to-income, unpaids on their bank statements, or what typically kills the deal?",
      "cue": "Prospect diagnoses their own floor's actual rejection reasons.",
      "stageNote": "Validates what factors are killing their bank submissions."
    },
    {
      "id": "clarify-crm-graveyard",
      "phase": 1,
      "phaseName": "PHASE 1: DIAGNOSIS",
      "section": "2. C — The CRM Graveyard (3:15 - 4:00)",
      "type": "rep",
      "speaker": "Rep",
      "text": "So right now, they basically sit in your CRM graveyard, and that marketing spend is 100% written off?\n\nAnd when that decline comes through—is it your desk that has to deliver the bad news to the buyer, or does the sales executive handle it?\n\nI hear that every day. You spend 45 minutes capturing the deal, structuring the file, chasing 3 months of bank statements—only to do unpaid administrative therapy for someone who can't get approved.",
      "cue": "Prospect expresses frustration with awkward conversations and wasted desk hours.",
      "stageNote": "Validate their frustration. Builds deep alliance with the desk."
    },
    {
      "id": "label-problem-bleed",
      "phase": 1,
      "phaseName": "PHASE 1: DIAGNOSIS",
      "section": "3. L — Label the Problem (4:00 - 4:45)",
      "type": "rep",
      "speaker": "Rep",
      "text": "So let me play the board back to you to make sure I have this 100% accurate:\n\nYou're submitting roughly {{monthly_apps}} applications a month.\n{{decline_rate}}% are getting turned down by the banks.\nThat is {{declined_units}} prospective buyers every single month who walked into your showroom, picked a vehicle, signed paperwork, and were ready to buy—who then walked out empty-handed.\n\nEven at a conservative gross profit of {{avg_margin}} per unit between the metal, doc fees, and finance commission...\n\nThis floor is forfeiting roughly {{monthly_bleed}} in gross profit every single month to bank algorithms.\n\nThat is what we call the 50% Fallout Bleed.\n\nHow long has your floor been bleeding that gross?",
      "cue": "Pause firmly for 2 seconds. Let the {{monthly_bleed}} figure sit in silence.",
      "stageNote": "Eye contact. Never apologize for their real numbers."
    },
    {
      "id": "overview-past-attempts",
      "phase": 1,
      "phaseName": "PHASE 1: DIAGNOSIS",
      "section": "4. O — Overview Past Experience (4:45 - 5:45)",
      "type": "rep",
      "speaker": "Rep",
      "text": "And over that time—has your dealership attempted anything internally or worked with third parties to recover those declined customers, or has the file just stayed dead?\n\n[If they say No]: Why is that?\n\nMakes total sense. But let me ask you: If your floor was able to get even 15 or 20 of those turned-down buyers back as approved deals... roughly how much gross revenue would that represent for this store?\n\nAnd how would banking an extra R300k+ in recovered margin every single month change your business?\n\nSo what is currently stopping you guys from actually making that money back right now?",
      "cue": "\n",
      "stageNote": "\n",
      "_isCustomEdited": true
    },
    {
      "id": "vacation-origin-mission",
      "phase": 2,
      "phaseName": "PHASE 2: SELLING THE VACATION",
      "section": "5. S — Origin & 80% Approval Mission (5:45 - 6:45)",
      "type": "rep",
      "speaker": "Rep",
      "text": "That exact problem is actually why our company exists.\n\nWe originally started as Volve Media—an automotive advertising agency. We spent years generating thousands of leads for dealerships across South Africa. The ads worked, the showrooms were full, but month after month, Dealer Principals kept telling us:\n'Guys, the leads are here, but over half of them are getting declined at the bank.'\n\nThat's when we made a decision: we didn't just want to be another marketing agency dumping raw traffic onto an F&I desk. We decided to solve the credit bottleneck directly so we could become the only agency in the country delivering an 80%+ bank finance approval rate on the buyers we bring in.",
      "cue": "\n",
      "stageNote": "\n",
      "_isCustomEdited": true
    },
    {
      "id": "vacation-core-philosophy",
      "phase": 2,
      "phaseName": "PHASE 2: SELLING THE VACATION",
      "section": "5. S — Financing is Math & Risk (6:45 - 7:45)",
      "type": "rep",
      "speaker": "Rep",
      "text": "When we first set out to crack this, we honestly thought there was nothing we could do—we assumed bank underwriting was this magic secret that nobody outside the banking halls could ever understand, and that the leads were doomed forever.\n\nBut we realized that's not completely true.\n\nWhat we discovered is that it's actually not a mystery at all:\nVehicle financing is purely a math and risk management problem.\n\nThe banks actually want to approve more cars—they make zero profit when they decline your customer. But they need to ensure they don't lend money to people who show behavioral signs of defaulting. The banks determine that by checking key specific factors that we have narrowed down to an exact science.",
      "cue": "Prospect nods in agreement. They know banks want interest but follow scorecards.",
      "stageNote": "Confident, authoritative tonality. You are speaking as financial engineers."
    },
    {
      "id": "vacation-two-buckets",
      "phase": 2,
      "phaseName": "PHASE 2: SELLING THE VACATION",
      "section": "5. S — The Two Buckets (7:45 - 8:30)",
      "type": "rep",
      "speaker": "Rep",
      "text": "Now, to be completely transparent: not every declined buyer can be saved.\n\nThe very first thing our underwriting desk does when a file enters our system is split them into two distinct buckets:\n\nBucket 1: The Truly Unrecoverable. People under active administration, formal debt review (Section 86), active court judgments, or zero verifiable income. There is no legal mechanism to put them in a car right now. We do not touch them, and we will never waste your time pretending we can.\n\nBucket 2: The Recoverable Pipeline. These are real, employed buyers with stable salaries and genuine purchase intent, but who tripped automated bank tripwires.\n\nThis second bucket represents 70% to 80% of your showroom turn-downs. This is the only place we operate.",
      "cue": "Prospect: 'Thank goodness, they're not trying to push debt-review buyers onto my floor.'",
      "stageNote": "Firm boundary. DPs respect operators who say no to bad business."
    },
    {
      "id": "vacation-three-questions",
      "phase": 2,
      "phaseName": "PHASE 2: SELLING THE VACATION",
      "section": "5. S — The 3 Questions Every Bank Asks (8:30 - 9:30)",
      "type": "rep",
      "speaker": "Rep",
      "text": "When a bank looks at your declined customer, they aren't looking at some mysterious code. Their algorithm is really just asking three simple questions:\n\n1. The Debt Question:\n'Does this person owe anyone money right now, and are they actually paying the people they owe on time—or are there unpaid accounts and old arrears hanging over their head?'\n\n2. The Bread Question:\n'After they've paid everyone they owe, do they have enough money left over to pay our vehicle installment every month and still buy bread for their family for the next 30 days?'\n\n3. The Conduct Question:\n'And day-to-day, how does this person actually live with their money? Are debit orders bouncing, are they living inside an overdraft with zero buffer—or do their bank statements show someone who manages cash responsibly?'\n\nIf an applicant fails even one of those three questions, the bank's system kicks them out.\n\nSimply put: what Credit Builder Flow does is get your declined buyers to live their lives for 90 days as if they already own the vehicle. We clean up their accounts, fix their cash buffer, eliminate unpaids, and simply prove to the banks that they can comfortably afford this car.",
      "cue": "Prospect recognizes that clean 90-day conduct unlocks bank approvals.",
      "stageNote": "Count 1, 2, 3 on your hands. The 'buy bread for 30 days' line lands hard."
    },
    {
      "id": "vacation-three-timelines",
      "phase": 2,
      "phaseName": "PHASE 2: SELLING THE VACATION",
      "section": "5. S — The 3 Recovery Timelines & Case Studies (Slide 11)",
      "type": "rep",
      "speaker": "Rep",
      "text": "Because every customer's financial profile is unique, every single lead you refer to us falls into one of three distinct categories:\n\nCategory 1: Deep Restructuring (6 Months+)\nDealerships typically hate this category because it takes the longest to pay out, but roughly 10% to 20% of your turned-down paper lands here. A great example is Lawrence. His Debt-to-Income ratio was over 80% of his salary. The reason a lead like Lawrence takes 6 months is because when someone has a mountain of bills, all their money goes to debt service. You can't show affordability while someone is drowning in debt payments. First 60 days: we aggressively restructure and pay down debt. Next 90 days: he lives with clean bank conduct to prove surplus cash flow. 60 days to clear debt + 90 days of clean banking = roughly 6 months to turn a dead file into a banked delivery.\n\nCategory 2: The Core (90 Days)\nThis is the meat and potatoes of your turned-down paper—roughly 70% to 80% of all the leads you refer will fall right here. A great example is Busi. He had substantial arrears, but his real bottleneck was banking conduct—unpaids and an overdraft that gave him a near-zero approval probability. Settling debt is only half the battle; banks demand three consecutive months of clean statement conduct. First 30 days: settled arrears and waited for the 30-day bureau cycle. Simultaneously over 90 days: coached him through three months of disciplined banking, living as if he already paid the car installment. On day 90, fresh prime-grade statements were pulled, re-applied on Signio, and funded.\n\nCategory 3: Quick Wins (45 to 60 Days)\nThese are the fastest turnarounds—roughly 10% of leads land here. A great example is Khumbuzile. Earning over R25,000 a month with flawless banking conduct, but declined across all lenders over a three-month overdue MTN account for just R300. His banking habits and affordability were already solid. The only bottleneck was bureau lag: creditors and bureaus only reconcile ledgers once a month on billing cycles. Immediate settlement of the R300 + 30-day reporting cycle. By day 45, his credit record was clear, re-captured on Signio, and approved immediately.\n\nNotice that across all three leads—Lawrence, Busi, and Khumbuzile—we never asked the dealership to wait with them or do any work. You sent the referral link, our desk managed the calendar, and your floor banked the delivery.",
      "cue": "Prospect absorbs the 3 realistic timelines without false promises.",
      "stageNote": "Deliver Lawrence, Busi, and Khumbuzile with steady 30-second cadence."
    },
    {
      "id": "vacation-zero-lift",
      "phase": 2,
      "phaseName": "PHASE 2: SELLING THE VACATION",
      "section": "5. S — Zero-Lift Desk Reality (Direct Callback)",
      "type": "rep",
      "speaker": "Rep",
      "text": "Remember when you told me earlier that right now, when a deal declines, your desk has to deliver the bad news, do unpaid therapy, and the lead just dies in your CRM?\n\nHere is how we change that completely:\n\nInstead of doing any of that, your team now only does one single thing: you just send our referral link to the customer. That's it.\n\nFrom that exact second, our team takes over and handles everything else off-site. You don't counsel them. You don't audit statements. We work with the customer directly to resolve the limiting blockages that caused the decline in the first place.\n\nThe next time your desk touches that file, you simply re-submit the application to the banks on Signio—only now, with a clean, bank-ready profile that gets approved.\n\nSend a link -> take the approval -> deliver the vehicle.",
      "cue": "Prospect realizes this removes work from their desk rather than adding to it.",
      "stageNote": "Stress the phrase 'one single thing: send the link.' F&Is love zero admin."
    },
    {
      "id": "vacation-exclusivity",
      "phase": 2,
      "phaseName": "PHASE 2: SELLING THE VACATION",
      "section": "5. S — Lead Exclusivity: Worst-Case Socratic Lock",
      "type": "rep",
      "speaker": "Rep",
      "text": "Now, the first question every sharp Dealer Principal and F&I asks is:\n'What stops you from taking my rehabilitated buyer and selling them to the dealership down the road?'\n\nLet's actually play that worst-case scenario out together:\n\nAssuming we did that scummy thing—we took your declined buyer, cleaned them up, and shopped them to your competitor down the road. And you inevitably found out. What would be your immediate next move?\n\n[Wait for Dealer/F&I to answer: 'I'd stop working with you immediately, cancel the agreement, and kick you out.']\n\nExactly. And in the South African dealership community—because everyone knows each other and DPs talk—what happens next when you tell your network and your friends in the industry what we did?\n\n[Wait for Dealer/F&I: 'Nobody would work with you. You'd be blacklisted.']\n\n100%. So how long do you think our business would survive in this market playing that game?\n\n[Dealer/F&I: 'Not very long. You'd be out of business in a few months.']\n\nSpot on. It's commercial suicide. Now contrast that with the real math: If we honor complete exclusivity, keep every lead locked to your showroom, and rehabilitate 20, 30, 50 of your turned-down buyers every year at R6,000 to R10,000 a deal... how much more money do we make together over the next 3 to 5 years?\n\n[Dealer/F&I: 'Hundreds of thousands. Way more than flipping a single deal.']\n\nExactly. Morals aside, the pure economics guarantee that we only win when that car drives off YOUR showroom floor. That is why our exclusivity is legally hardcoded into our bilateral pilot agreement.",
      "cue": "Dealer/F&I explicitly states that stealing leads is commercial suicide.",
      "stageNote": "Let them answer each question. Do not skip the Socratic responses."
    },
    {
      "id": "vacation-commercials",
      "phase": 2,
      "phaseName": "PHASE 2: SELLING THE VACATION",
      "section": "5. S — Performance Commercials & Destination Math",
      "type": "rep",
      "speaker": "Rep",
      "text": "Here is how our commercial partnership is structured:\n\n• Vehicles under R130,000: Flat handling fee of R6,000 upon successful delivery.\n• Vehicles R130,000 and above: 5.0% of the vehicle retail price upon successful delivery.\n\n• R0 Upfront cost.\n• R0 Monthly retainers.\n• R0 Platform or tech fees.\n\nOur fee is payable ONLY once the vehicle is delivered and funded by the bank. If that customer does not take delivery of a car from your floor, you owe us absolutely nothing.\n\nAnd destination math: Right now, you've got roughly {{declined_units}} turned-down files in your CRM graveyard generating exactly R0. Even if our desk only recovers {{recovered_units}} of those buyers a month, that is roughly {{recovered_revenue}} in net new gross profit and F&I commission that was otherwise dead money.\n\nYou are essentially unlocking found money at zero capital risk.",
      "cue": "Prospect realizes they have zero capital exposure and high upside.",
      "stageNote": "Rhythmically hit the R0 lines. Transition to the close."
    },
    {
      "id": "close-authority-check",
      "phase": 3,
      "phaseName": "PHASE 3: RESOLUTION & CLOSE",
      "section": "6. E — Authority Litmus Check (10:00 - 10:45)",
      "type": "rep",
      "speaker": "Rep",
      "text": "Now, [Name], when it comes to plugging in an off-site recovery desk to rescue these declined files—is that a workflow you have the authority to green-light yourself on your desk, or does every service agreement go strictly through the Dealer Principal?",
      "cue": "Branch:\nIf DP -> Proceed directly to the Layup & 3 Decisions.\nIf F&I -> 'Makes complete sense. If this were entirely your decision and [DP] had already approved the budget, would you personally want this on your desk this month?'",
      "stageNote": "Now that they love the vacation, authority qualification has zero friction."
    },
    {
      "id": "close-dp-layup",
      "phase": 3,
      "phaseName": "PHASE 3: RESOLUTION & CLOSE",
      "section": "6. E — The Dealer Principal Layup (10:45 - 12:00)",
      "type": "rep",
      "speaker": "Rep",
      "text": "[DP Name], I hear you 100%.\n\nWhenever a dealer principal tells me they need time to weigh this up, I always have this visual of them sitting alone in their office tonight with a cup of coffee, staring at the ceiling for two hours weighing this up.\n\nBut you and I both know that's not what happens.\n\nWhat actually happens is: you walk out of this room, someone corners you about a trade-in appraisal, a customer has a complaint on delivery, you've got floorplan interest to review, and you spend the rest of the day putting out fires.\n\nNext week, your F&I hands you the weekly pack. You see another 10 to 15 bank turn-downs on the sheet. The cycle repeats, and two months from now, life made the decision for you by default—and the store is in the exact same spot, bleeding {{monthly_bleed}} every month.\n\nInstead of letting the calendar make that call for you, let's look at the only three decisions that are actually on the table today:",
      "cue": "Pause 1s after 'staring at the ceiling'. Watch for their smile or nod.",
      "stageNote": "Warm, conversational, slightly amused tonality. Never confrontational."
    },
    {
      "id": "close-three-decisions",
      "phase": 3,
      "phaseName": "PHASE 3: RESOLUTION & CLOSE",
      "section": "6. E — The 3 Decisions Anchor (12:00 - 13:30)",
      "type": "rep",
      "speaker": "Rep",
      "text": "Decision 1: You choose not to work with us.\nNothing changes. Your desk continues to let turned-down buyers walk, and this store continues to forfeit roughly {{monthly_bleed}} in retail gross every month to bank algorithms.\n\nDecision 2: You test us, and we fall flat on our face.\nWe take your declined files from last week, we don't recover a single vehicle, and we fail. Because we take zero upfront fees and our portal handles the heavy lifting, your desk lost zero selling hours, your banks were untouched, and you paid zero retainers. You are in the exact same spot you're in right now.\n\nDecision 3: It works exactly like we showed you.\nWe take the {{declined_units}} buyers your banks turned down, our underwriters remediate the bureau blockers, and we put just {{recovered_units}} extra banked deals over your curb this month. That's {{recovered_revenue}} in retained gross profit that was already written off as dead money.\n\nBetween Decision 1 and Decision 2, your downside is identical—you lose nothing. But Decision 3 puts {{recovered_units}} extra units on your board every month.\n\nIf a decision carries zero downside, why not make the call that actually has the upside for your floor?",
      "cue": "Deliver seamlessly without asking permission between decisions.",
      "stageNote": "Let the logic sink in. Hold eye contact."
    },
    {
      "id": "close-sandbox-pilot-lock",
      "phase": 3,
      "phaseName": "PHASE 3: RESOLUTION & CLOSE",
      "section": "7. R — The 30-Day Sandbox Pilot Lock (13:30 - 15:00)",
      "type": "rep",
      "speaker": "Rep",
      "text": "Look [Name], we don't need a complex multi-year contract or a massive operational rollout to prove this works.\n\nHere is what I propose: Let's do a 30-Day Sandbox Pilot. Send our desk 5 to 10 of last week's dead, declined files—customers who walked off your lot and who you've already written off as lost revenue.\n\nWe will onboard them, separate the unrecoverable files, and put the recoverable buyers onto their rehabilitation track. If we don't produce clean, pre-approved buyers ready to take delivery from your floor, you walk away having spent zero Rand.\n\nCan we grab 5 of last week's declined files off Signio today so we can get started?",
      "cue": "Prospect agrees to pull 5 files to test.",
      "stageNote": "Lock the operational next step. Keep friction at absolute zero."
    }
  ],
  "objections": [
    {
      "id": "obj-dp-think",
      "title": "I need to think about it",
      "triggerKey": "D",
      "regexPattern": "\\b((i|we) (need|want|have) to think about it|let (me|us) think about it|(i'll|we'll) think about it|mull it over|sleep on it|get back to you|look over the weekend)\\b",
      "bulletSummary": "The Coffee vs Daily Fires Layup -> The 3 Decisions Frame",
      "repScript": "I hear you 100%. Whenever a dealer principal tells me they need to think about it, I picture them sitting with a coffee tonight weighing it up... But fires take over, life makes the decision by default, and next month another R500k bleeds out. Let's look at the only 3 actual decisions on the table: Inaction (Guaranteed bleed), Failure (Zero cost/zero risk), Success (5 extra units / R100k gross). Since downside is zero, why not choose the upside?"
    },
    {
      "id": "obj-fni-approval",
      "title": "Need DP approval",
      "triggerKey": "F",
      "regexPattern": "\\b(speak to (the )?(dp|dealer principal|owner|boss|md)|get (the )?approval|need (an? )?approval)\\b",
      "bulletSummary": "Authority Litmus Test -> Forwardable 1-Page Portal Briefing",
      "repScript": "Makes complete sense. If this were entirely your decision and [DP] had already approved the budget, would you personally want this on your desk this month?\n\nIf Yes: 'Awesome. Don't try to explain our clearance legalities while he's busy. I will send you a 3-line email with our dealership portal link (volvemedia.com). You forward it, and we do a 10-minute briefing together where I take the heat on the numbers.'"
    },
    {
      "id": "obj-fee-pushback",
      "title": "Margin is too thin",
      "triggerKey": "M",
      "regexPattern": "\\b(too expensive|cut (the )?fee|reduce (the )?fee|commission is too high)\\b",
      "bulletSummary": "80% of Something Rule (Verbal Lever)",
      "repScript": "I hear you completely. On entry-level budget units under R100k, margins can be tight. We are partners, not parasites. If you have a specific distressed unit where the standard fee squeezes the deal, your F&I just flags it with our desk prior to delivery. We adjust reasonably so the store always makes a healthy profit. Remember: 80% of something is infinitely better than 100% of a dead decline."
    },
    {
      "id": "obj-timeline",
      "title": "90 days is too long",
      "triggerKey": "T",
      "regexPattern": "\\b(90 days is too long|three months is too long|take too long|customer will walk)\\b",
      "bulletSummary": "Signio-Wide Decline Lock",
      "repScript": "That would be true if the customer was financeable today. But remember: they were turned down on Signio across all 4 major banks. They cannot buy from your competitor today either. When their credit is fixed legally by our desk, they buy from the dealership that helped them—which is you."
    },
    {
      "id": "obj-data-buyer",
      "title": "Competitor buys declines",
      "triggerKey": "C",
      "regexPattern": "\\b(buy (our )?data|sell (our )?leads|r500 per lead|cash for leads)\\b",
      "bulletSummary": "R500 Coffee Money vs R20,000 Deal Gross",
      "repScript": "If you sell 50 decline leads for R500, you make R25k once, but surrender those customers forever to a broker who finances them at another dealership. With our model, recovering just 2 of those 50 deals puts R40,000+ in vehicle gross into your account while keeping your customer. Would you rather make R500 in coffee money, or R20,000 keeping your buyer?"
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = SCRIPT_DATA;
}
