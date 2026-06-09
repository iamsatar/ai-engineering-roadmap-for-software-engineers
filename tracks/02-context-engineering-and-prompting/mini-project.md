# Mini Project — Prompt-as-Code Module

## Goal

Create a versioned prompt module with typed inputs, structured outputs, and regression tests.

## What It Teaches

Context engineering, prompt specs, examples, output contracts, prompt versioning, and regression testing.

## Suggested Stack

TypeScript, Node.js, Zod or JSON Schema, Vitest/Jest, provider SDK.

## Requirements

- Store prompt versions in code.
- Define typed inputs and structured outputs.
- Run a fixed set of test cases.
- Include adversarial or confusing user content.
- Report pass, fail, and review-needed cases.

## Acceptance Criteria

- [ ] At least 20 test cases exist.
- [ ] Prompt versions can be compared.
- [ ] Structured outputs are validated.
- [ ] Bad outputs are saved for analysis.
- [ ] The README explains the prompt contract.

## Stretch Goals

- Add CI.
- Add LLM-as-judge with human review.
- Add prompt diff notes.

## README Expectations

Include the task, prompt contract, eval cases, failure examples, and versioning approach.

## Estimated Time

2-4 days.
