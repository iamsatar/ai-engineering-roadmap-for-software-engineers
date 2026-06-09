# 08: AI Infrastructure Light

## Goal

Understand the infrastructure basics needed to deploy and operate AI applications.

## Concepts

- Deployment
- Queues and background jobs
- Caching
- Rate limits
- Retries and backoff
- Model routing
- Secrets management
- Vector database operations
- Cost controls
- Fallbacks

## Builder Mental Model

AI infrastructure is normal production infrastructure plus model-specific concerns: variable latency, rate limits, nondeterministic quality, token cost, provider outages, and data governance.

## Hands-On Work

- Deploy one AI service.
- Add request timeouts and retries.
- Add model fallback or routing.
- Add caching where appropriate.
- Add cost budget warnings.

## Failure Modes

- Provider latency blocks user workflows.
- Rate limits break batch jobs.
- Retries multiply cost.
- Vector index updates are inconsistent.
- Logs capture sensitive data.

## Deliverables

- Deployed service
- Operational runbook
- Cost and latency notes
- Failure-handling plan

## Interview Practice

- Explain how you handle model provider outages.
- Explain how you control AI feature cost.
- Explain how you deploy vector search safely.
