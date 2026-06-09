# 01: LLM Mechanics for Builders

## Goal

Understand enough about LLM behavior to design reliable AI product features.

## Concepts

- Tokens and tokenization
- Context windows
- Sampling and temperature
- Instruction hierarchy
- Structured outputs
- Function and tool calling
- Latency and cost tradeoffs
- Model selection

## Builder Mental Model

An LLM predicts likely next tokens conditioned on context. As a builder, your job is to shape context, constrain outputs, verify results, and design fallback paths.

## Hands-On Work

- Compare token counts for code, prose, JSON, and tables.
- Vary temperature and observe output stability.
- Force JSON output and test invalid cases.
- Compare a small fast model with a larger capable model.

## Failure Modes

- Output does not match schema.
- Model follows user text that should be treated as data.
- Long context hides important instructions.
- High temperature creates inconsistent behavior.
- Cheap model fails at complex reasoning.

## Deliverables

- LLM behavior notes
- Token and cost examples
- Structured output experiments
- Model comparison table

## Interview Practice

- Explain why tokenization matters in an AI app.
- Explain how you choose between two models.
- Explain why structured outputs are preferable to parsing free text.
