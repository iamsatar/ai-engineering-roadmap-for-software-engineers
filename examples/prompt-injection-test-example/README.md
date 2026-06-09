# Prompt Injection Test Example

## What This Demonstrates

How to create test cases for direct and indirect prompt injection in an AI system.

## Why It Matters

RAG and agent systems often include untrusted content. The model can read that content, but it should not treat it as trusted instruction.

## Files To Create Later

- `attacks/direct.json`
- `attacks/indirect-docs.json`
- `src/run-attacks.ts`
- `src/assertions.ts`
- `reports/results.md`

## Acceptance Criteria

- [ ] Direct prompt injection cases exist.
- [ ] Indirect prompt injection cases exist.
- [ ] Tests check for data leakage.
- [ ] Tests check for unauthorized tool use.
- [ ] Mitigations are documented.

## Optional Stretch Goals

- Add automated attack regression tests.
- Add severity scoring.
- Add an audit-log review step.
