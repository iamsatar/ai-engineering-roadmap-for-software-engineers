# 02: Context Engineering and Prompting

## Goal

Move from clever prompts to engineered context that can be tested, versioned, and maintained.

## Concepts

- System, developer, user, and retrieved context
- Task decomposition
- Few-shot examples
- Output contracts
- Context packing
- Prompt versioning
- Regression testing
- Prompt injection awareness

## Context Engineering Pattern

Good context usually contains:

- Role and objective
- Task-specific instructions
- Relevant data
- Constraints
- Output schema
- Examples
- Failure behavior

## Hands-On Work

- Rewrite a vague prompt into a prompt spec.
- Add examples and compare behavior.
- Build a small regression set.
- Test prompt changes against old cases.

## Failure Modes

- Prompt works on one demo but fails on edge cases.
- Examples bias the output incorrectly.
- Retrieved text overrides instructions.
- Output is too verbose or underspecified.

## Deliverables

- Prompt spec
- Regression cases
- Change notes
- Failure analysis

## Interview Practice

- Explain context engineering versus prompting.
- Explain how you test prompt changes.
- Explain how you separate instructions from untrusted data.
