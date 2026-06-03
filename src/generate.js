const suspects = [
  "Mittens, Director of Unapproved Gravity Tests",
  "Beans, Chaircat of the Crumb Acquisition Board",
  "Professor Whiskers, PhD in Sudden Sprinting",
  "Juniper, Senior Cabinet Inspector",
  "Toast, Night Shift Vase Auditor",
  "Noodle, Freelance Keyboard Warmth Consultant"
];

const locations = [
  "the forbidden countertop",
  "an active laundry basket",
  "the sunbeam jurisdiction",
  "a laptop already under heavy workload",
  "the hallway at 3:17 AM",
  "inside one legally ambiguous cardboard box"
];

const violations = [
  "performed a stress test on a full water glass",
  "opened a portal behind the couch and deposited one sock",
  "declared breakfast was late despite breakfast having occurred",
  "reclassified a houseplant as an enemy combatant",
  "started a meeting by walking across the mute button",
  "stared at nothing until everyone else became worried"
];

const evidence = [
  "one heroic tuft of fur",
  "seventeen pawprints arranged like legal citations",
  "a suspiciously warm keyboard",
  "a single biscuit where no biscuit should be",
  "an overturned object with no known enemies",
  "purring audible from the crime scene"
];

const outcomes = [
  "sentence suspended due to cuteness",
  "case dismissed after belly-trap counterargument",
  "remanded to the windowsill for further observation",
  "ordered to perform three minutes of community loafing",
  "released on recognizance and immediately reoffended",
  "promoted to household risk officer"
];

const severities = [
  "Low, but theatrical",
  "Medium, with whisker aggravators",
  "High, furniture involved",
  "Critical, treats demanded",
  "Maximum fluff containment",
  "Uninsurable"
];

function pick(items, rng) {
  return items[Math.floor(rng() * items.length)];
}

export function seededRandom(seedText = "") {
  let seed = 2166136261;
  for (const char of seedText) {
    seed ^= char.charCodeAt(0);
    seed = Math.imul(seed, 16777619);
  }

  return () => {
    seed += 0x6d2b79f5;
    let t = seed;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function generateReport({ seed = String(Date.now()) } = {}) {
  const rng = seededRandom(seed);

  return {
    caseNumber: `CAT-${Math.floor(rng() * 9000) + 1000}`,
    suspect: pick(suspects, rng),
    location: pick(locations, rng),
    violation: pick(violations, rng),
    evidence: pick(evidence, rng),
    severity: pick(severities, rng),
    outcome: pick(outcomes, rng)
  };
}

export function formatReport(report) {
  return [
    `Case ${report.caseNumber}`,
    `Suspect: ${report.suspect}`,
    `Location: ${report.location}`,
    `Violation: ${report.violation}`,
    `Evidence: ${report.evidence}`,
    `Severity: ${report.severity}`,
    `Outcome: ${report.outcome}`
  ].join("\n");
}
