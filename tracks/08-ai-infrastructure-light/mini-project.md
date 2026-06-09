# Mini-Project: Deployed AI Service

## Objective

Deploy one previous AI project with operational controls.

## Requirements

- Deploy to a real environment.
- Use environment-based secrets.
- Add request timeouts.
- Add retry policy with limits.
- Track cost and latency.
- Add a simple runbook.

## Optional Infrastructure

- Queue for batch ingestion or evals
- Cache for repeated responses or retrieval
- Vector database service
- Error tracking
- Feature flag for model changes

## Evaluation

Test:

- Cold start
- Provider failure
- Rate limit
- Long request
- Bad environment config

## Deliverables

- Live service or deployment notes
- Runbook
- Cost notes
- Build-log entry

## Stretch Goals

- Add model routing.
- Add budget alerts.
- Add load testing for realistic usage.
