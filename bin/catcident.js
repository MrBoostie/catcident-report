#!/usr/bin/env node
import { formatReport, generateReport } from "../src/generate.js";

const seedArg = process.argv.find((arg) => arg.startsWith("--seed="));
const seed = seedArg ? seedArg.slice("--seed=".length) : undefined;

console.log(formatReport(generateReport({ seed })));
