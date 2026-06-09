# Track 02 — Context Engineering and Prompting

## Summary

This track moves you from clever one-off prompts to testable, versioned context design.

## Why This Matters

Production AI behavior depends on instructions, examples, retrieved context, state, and output contracts. Prompting is only one part of context engineering.

## Learning Objectives

By the end of this track, the learner should be able to:

- Write a prompt specification.
- Separate instructions from untrusted data.
- Use examples deliberately.
- Version prompts and run regression tests.
- Design clear output contracts.

## Core Topics

- System and user context
- Few-shot examples
- Context packing
- Prompt versioning
- Output schemas
- Regression tests
- Prompt injection awareness

## Mental Model

Context is the application state the model can see. Good context engineering decides what enters that state, in what order, under what constraints, and how changes are tested.

## Recommended Resources

### OpenAI Prompt Engineering Guide

Link: https://platform.openai.com/docs/guides/prompt-engineering

Why it matters: Covers practical prompt design techniques.

Focus on: instructions, examples, decomposition.

Skip: tricks that cannot be tested.

### Anthropic Prompt Engineering Guide

Link: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview

Why it matters: Strong reference for structured and long-context prompts.

Focus on: context ordering and examples.

Skip: provider-specific habits that do not transfer.

### OpenAI Structured Outputs

Link: https://platform.openai.com/docs/guides/structured-outputs

Why it matters: Output contracts make prompts safer to integrate.

Focus on: schema design and validation.

Skip: advanced schemas until basics work.

## Hands-On Work

Rewrite a vague prompt into a prompt spec, add examples, build a regression set, and compare prompt versions.

## Mini Project

Prompt Regression Harness: a command-line or web harness that runs prompt versions against fixed cases and reports failures.

## Deliverables

- Code
- README
- Tests or evals where applicable
- Notes
- Build-log entry

## Acceptance Criteria

The learner can move on only when:

- At least 20 cases exist.
- Prompt versions can be compared.
- Structured outputs are validated.
- Adversarial user content is tested.

## Common Mistakes

- Testing only happy paths.
- Mixing instructions with untrusted documents.
- Adding examples that bias the wrong behavior.
- Treating prompt edits as harmless copy changes.

## Interview Practice

- What is context engineering?
- How do you test prompt changes?
- How do you handle prompt injection in user content?
- How do examples affect model behavior?

## Move On When

- [ ] You have a prompt spec.
- [ ] You have regression cases.
- [ ] You can compare two prompt versions.
- [ ] You can explain why one failure happened.
