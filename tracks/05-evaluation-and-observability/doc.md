# 05: Evaluation and Observability

## Goal

Learn how to measure and debug AI system quality before and after deployment.

## Concepts

- Golden datasets
- Human evaluation
- LLM-as-judge
- Regression tests
- Traces
- Cost and latency monitoring
- User feedback
- Online versus offline evals

## Evaluation Types

- Unit-style checks for schema and tool calls
- Dataset evals for task quality
- Human review for nuanced judgment
- Production monitoring for drift and incidents

## Hands-On Work

- Build an eval set for your RAG assistant.
- Add automated scoring where possible.
- Add human review fields.
- Instrument traces for model calls and retrieval steps.

## Failure Modes

- Eval set is too easy.
- Judge model rewards style over correctness.
- Metrics do not match user value.
- Traces omit the context needed for debugging.

## Deliverables

- Eval dataset
- Eval runner
- Trace view or logs
- Quality report

## Interview Practice

- Explain how you evaluate a RAG assistant.
- Explain when LLM-as-judge is useful or risky.
- Explain what you log for AI observability.
