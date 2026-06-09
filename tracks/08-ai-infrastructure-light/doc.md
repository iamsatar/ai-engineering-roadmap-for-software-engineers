# Track 08 — AI Infrastructure Light

## Summary

This track teaches the infrastructure basics needed to deploy and operate AI applications.

## Why This Matters

AI infrastructure is normal production infrastructure plus model-specific concerns: variable latency, rate limits, token cost, provider outages, and data governance.

## Learning Objectives

By the end of this track, the learner should be able to:

- Deploy an AI service.
- Add retries, timeouts, and fallbacks.
- Track cost and latency.
- Understand routing and caching.
- Write a basic operational runbook.

## Core Concepts

- Deployment
- Queues
- Caching
- Rate limits
- Retries and backoff
- Model routing
- Secrets management
- Vector database operations
- Cost controls

## Mental Model

Model calls are slow, costly external dependencies. Infrastructure should protect users, budgets, and downstream systems when model behavior or provider availability changes.

## Recommended Resources

### LiteLLM Docs

Link: https://docs.litellm.ai

Why it matters: Practical model gateway and routing reference.

Focus on: proxy, routing, budgets, logging.

Skip: complex deployment at first.

### vLLM Docs

Link: https://docs.vllm.ai

Why it matters: Helps explain open-model serving tradeoffs.

Focus on: serving, throughput, batching.

Skip: GPU tuning unless targeting platform roles.

### Ollama Docs

Link: https://docs.ollama.com

Why it matters: Useful for local model experiments.

Focus on: local development and model selection.

Skip: assuming local model quality is always enough.

## Hands-On Work

Deploy a previous AI project with timeouts, retry limits, cost tracking, latency notes, and a runbook.

## Mini Project

LLM Router / Gateway: a deployed AI service with provider abstraction and operational controls.

## Deliverables

- Code
- README
- Tests or evals where applicable
- Notes
- Build-log entry

## Acceptance Criteria

The learner can move on only when:

- The service is deployable.
- Provider failures are handled.
- Cost and latency are visible.
- A runbook exists.

## Common Mistakes

- Retrying without cost limits.
- Blocking user workflows on long model calls.
- Logging sensitive data.
- Changing models without eval gates.

## Interview Practice

- How do you handle provider outages?
- How do you control AI feature cost?
- When would you use caching?
- What belongs in an AI service runbook?

## Move On When

- [ ] Your service has timeouts.
- [ ] Your service has retry limits.
- [ ] You can explain fallback behavior.
- [ ] You have cost and latency notes.
