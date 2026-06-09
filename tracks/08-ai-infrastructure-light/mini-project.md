# Mini-Project: Simple LLM Router

## Goal

Build a small LLM router or gateway with operational controls.

## What It Teaches

Provider abstraction, routing, timeouts, retries, fallbacks, rate limits, caching, cost tracking,
and runbooks.

## Suggested Stack

TypeScript, Node.js, LiteLLM optional, Redis optional, hosted deployment platform.

## Requirements

- Route requests through one gateway layer.
- Add request timeouts.
- Add retry limits.
- Track cost and latency.
- Document fallback behavior.
- Include a simple runbook.

## Acceptance Criteria

- [ ] The service is deployable or has clear deployment notes.
- [ ] Provider failures do not crash the service.
- [ ] Cost and latency are visible.
- [ ] Retry behavior is bounded.
- [ ] A runbook exists.

## Stretch Goals

- Add model fallback.
- Add budget alerts.
- Add caching.
- Add basic load testing.

## README Expectations

Include setup, routing policy, environment variables, failure handling, cost/latency notes, and
runbook.

## Estimated Time

3-5 days.
