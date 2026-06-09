#!/usr/bin/env node
// check-markdown-structure.js
// Detects semantically compressed Markdown files where structural elements
// (headings, list items, table separators) appear on the same physical line.

import { readFileSync, readdirSync, statSync } from "fs";
import { join, extname } from "path";

const ROOT = new URL("..", import.meta.url).pathname;

const SUSPICIOUS_PATTERNS = [
  // Multiple headings on same line
  { re: /#{1,6}\s.+#{1,6}\s/, label: "multiple headings on same line" },
  // Heading followed by a list item on same line
  { re: /#{1,6}\s.+\s-\s/, label: "heading and list item on same line" },
  // Two list items on same line (hyphen bullet)
  { re: /^-\s.+-\s/, label: "multiple list items on same line" },
  // Table separator mixed with content (not a pure separator row)
  {
    re: /\|---.*\|.*[a-zA-Z]/,
    label: "table separator mixed with content",
  },
  // Blockquote marker followed by a heading on same line
  { re: /^>\s.+#{1,6}\s/, label: "blockquote and heading on same line" },
];

const MAX_LINE_LENGTH = 500;
const STRUCTURAL_MARKERS = ["##", "- ", "[ ]", "|---|"];

function collectMdFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry.startsWith(".")) continue;
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      results.push(...collectMdFiles(full));
    } else if (extname(entry) === ".md") {
      results.push(full);
    }
  }
  return results;
}

let totalIssues = 0;

for (const file of collectMdFiles(ROOT)) {
  const rel = file.replace(ROOT, "");
  const lines = readFileSync(file, "utf8").split("\n");
  const fileIssues = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNum = i + 1;

    for (const { re, label } of SUSPICIOUS_PATTERNS) {
      if (re.test(line)) {
        fileIssues.push(`  Line ${lineNum}: ${label}`);
        fileIssues.push(`    > ${line.slice(0, 120)}`);
      }
    }

    if (
      line.length > MAX_LINE_LENGTH &&
      STRUCTURAL_MARKERS.some((m) => line.includes(m))
    ) {
      fileIssues.push(
        `  Line ${lineNum}: line over ${MAX_LINE_LENGTH} chars with structural markers`
      );
      fileIssues.push(`    > ${line.slice(0, 120)}...`);
    }
  }

  if (fileIssues.length > 0) {
    console.error(`\nFAIL ${rel}`);
    fileIssues.forEach((l) => console.error(l));
    totalIssues += fileIssues.length;
  }
}

if (totalIssues > 0) {
  console.error(
    `\n${totalIssues} structural issue(s) found. Fix compressed Markdown before pushing.`
  );
  process.exit(1);
} else {
  console.log("All Markdown files passed structural check.");
  process.exit(0);
}
