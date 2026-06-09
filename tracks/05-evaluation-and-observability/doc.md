# Track 05 — Evaluation and Observability

## Summary

This track teaches how to measure and debug AI system quality before and after deployment.

## Why This Matters

AI systems can look good in demos and fail in production. Evals and traces turn vague quality concerns into inspectable evidence.

## Learning Objectives

By the end of this track, the learner should be able to:

- Build a golden dataset.
- Run regression evals.
- Use human review and LLM-as-judge carefully.
- Trace model, retrieval, and tool steps.
- Track cost, latency, and quality.

## Core Topics

- Golden datasets
- Human evaluation
- LLM-as-judge
- Regression tests
- Traces
- Cost and latency monitoring
- Online and offline evals

## Mental Model

Evaluation asks whether the system is good enough. Observability asks why it behaved the way it did. You need both.

## Recommended Resources

### Ragas Docs

Link: https://docs.ragas.io

Why it matters: RAG-focused evaluation methods.

Focus on: faithfulness and context metrics.

Skip: blind trust in automatic metrics.

### DeepEval Docs

Link: https://docs.confident-ai.com

Why it matters: Useful for LLM app regression testing.

Focus on: test cases and metrics.

Skip: giant suites before good examples.

### Langfuse Docs

Link: https://langfuse.com/docs

Why it matters: Trace visibility is essential for debugging.

Focus on: traces, scores, datasets.

Skip: enterprise workflows at first.

### OpenTelemetry GenAI

Link: https://opentelemetry.io/docs/specs/semconv/gen-ai/

Why it matters: Standardizes GenAI telemetry.

Focus on: model-call attributes.

Skip: custom standards before reading the existing one.

## Hands-On Work

Add an eval runner, result history, trace logs, and an eval report to a previous AI project.

## Mini Project

Eval and Observability Suite: an eval harness plus trace/cost/latency reporting for a RAG or agent project.

## Deliverables

- Code
- README
- Tests or evals where applicable
- Notes
- Build-log entry

## Acceptance Criteria

The learner can move on only when:

- Eval cases run from one command.
- Results are stored by version.
- Failures are categorized.
- Traces include the context needed for debugging.

## Common Mistakes

- Creating evals that are too easy.
- Letting judge models reward style over correctness.
- Tracking latency but not quality.
- Logging traces without retrieved context or tool results.

## Interview Practice

- How do you evaluate a RAG assistant?
- When is LLM-as-judge useful or risky?
- What should be traced in an AI app?
- How do evals fit into CI?

## Move On When

- [ ] You have a golden dataset.
- [ ] You can run regression evals.
- [ ] You can inspect traces.
- [ ] You can explain one quality regression.
