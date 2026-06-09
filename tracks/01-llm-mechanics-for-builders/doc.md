# Track 01 — LLM Mechanics for Builders

## Summary

This track teaches the practical model behavior you need to design reliable LLM features.

## Why This Matters

You do not need to train models from scratch, but you do need to understand tokens, context, sampling, structured outputs, and model tradeoffs.

## Learning Objectives

By the end of this track, the learner should be able to:

- Explain tokenization in product terms.
- Reason about context windows and context budgets.
- Compare temperature, output length, latency, and cost.
- Use structured outputs instead of fragile text parsing.
- Choose models based on task constraints.

## Core Topics

- Tokens
- Context windows
- Sampling
- Structured outputs
- Tool/function calling
- Model selection
- Latency and cost

## Mental Model

An LLM predicts likely next tokens conditioned on context. Your job is to shape context, constrain outputs, verify results, and design fallbacks.

## Recommended Resources

### Karpathy Tokenizer Video

Link: https://www.youtube.com/watch?v=zduSFxRajkE

Why it matters: Tokenization directly affects context and cost.

Focus on: how text becomes tokens.

Skip: implementation details that do not affect app design.

### Illustrated Transformer

Link: https://jalammar.github.io/illustrated-transformer/

Why it matters: Builds intuition for attention and context.

Focus on: attention and sequence processing.

Skip: math derivations.

### Hugging Face LLM Course

Link: https://huggingface.co/learn/llm-course

Why it matters: Gives broader LLM vocabulary.

Focus on: inference basics.

Skip: training-heavy sections.

## Hands-On Work

Compare token counts for prose, code, JSON, and tables. Vary temperature, model, schema constraints, and output length.

## Mini Project

Tokenizer and Embedding Playground: a tool for comparing prompts, models, settings, token usage, cost, and structured-output reliability.

## Deliverables

- Code
- README
- Tests or evals where applicable
- Notes
- Build-log entry

## Acceptance Criteria

The learner can move on only when:

- Token usage is visible for experiments.
- At least five model behavior experiments are documented.
- Structured output validation catches failures.
- Cost and latency tradeoffs are described.

## Common Mistakes

- Assuming temperature is the only reliability control.
- Parsing free text when a schema is possible.
- Ignoring token cost until late.
- Using the largest model for every task.

## Interview Practice

- Why does tokenization matter?
- How do you choose between models?
- How do structured outputs reduce production risk?
- What causes long-context prompts to fail?

## Move On When

- [ ] You can explain tokens to another engineer.
- [ ] You have compared at least two models.
- [ ] You have validated structured outputs.
- [ ] You can estimate cost for a small workflow.
