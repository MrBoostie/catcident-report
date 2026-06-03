import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { formatReport, generateReport } from "../src/generate.js";

describe("generateReport", () => {
  it("is deterministic when seeded", () => {
    assert.deepEqual(generateReport({ seed: "toast" }), generateReport({ seed: "toast" }));
  });

  it("returns the expected report fields", () => {
    const report = generateReport({ seed: "beans" });

    assert.match(report.caseNumber, /^CAT-\d{4}$/);
    assert.ok(report.suspect);
    assert.ok(report.location);
    assert.ok(report.violation);
    assert.ok(report.evidence);
    assert.ok(report.severity);
    assert.ok(report.outcome);
  });
});

describe("formatReport", () => {
  it("prints a readable incident report", () => {
    const output = formatReport(generateReport({ seed: "noodle" }));

    assert.match(output, /^Case CAT-\d{4}/);
    assert.match(output, /Suspect:/);
    assert.match(output, /Outcome:/);
  });
});
