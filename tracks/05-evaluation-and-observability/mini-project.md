# Mini Project — RAG Eval Harness

## Goal

Add an eval runner and observability layer to a RAG project.

## What It Teaches

Golden datasets, regression tests, faithfulness checks, LLM-as-judge limits, traces, cost, latency, and release gates.

## Suggested Stack

TypeScript, Node.js, JSON/CSV eval sets, Langfuse or OpenTelemetry, optional Ragas/DeepEval.

## Requirements

- Run eval cases from one command.
- Store results by version.
- Track answer quality, citation quality, cost, and latency.
- Capture retrieval and generation traces.
- Produce an eval report.

## Acceptance Criteria

- [ ] Eval cases run reproducibly.
- [ ] Failures are categorized.
- [ ] Results are stored by version.
- [ ] Traces include retrieved chunks and model calls.
- [ ] The eval report includes a release decision.

## Stretch Goals

- Add CI regression gates.
- Add human review UI.
- Add dashboard screenshots.

## README Expectations

Include metrics, dataset, scoring rubric, trace format, results, and failure analysis.

## Estimated Time

3-5 days.
