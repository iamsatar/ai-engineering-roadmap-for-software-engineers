# 00: Orientation and Setup

## Goal

Set up the working habits and baseline tools for applied AI engineering.

## Why This Matters

AI systems fail in ways normal software systems do not: vague outputs, hidden context bugs, nondeterminism, cost spikes, tool misuse, and silent quality regressions. Your setup should make those problems visible from day one.

## Concepts

- AI application anatomy: app, orchestrator, model, tools, retrieval, evals, logs
- Environment management and secrets
- Model provider APIs
- Request tracing
- Cost and latency tracking
- Build logs as portfolio evidence

## Hands-On Work

- Create accounts and API keys for at least one model provider.
- Build a tiny CLI or web app that sends a prompt and prints the response.
- Log prompt, response, model, token usage, latency, and errors.
- Create your first build-log entry.

## Builder Questions

- Where will model calls be made in your app?
- How will you avoid leaking secrets?
- How will you debug a bad answer?
- What will you log without storing sensitive data?

## Deliverables

- Runnable starter app
- `.env.example`
- Basic tracing or logging
- First build-log entry

## Completion Criteria

- You can run one command and get an LLM response.
- You can inspect latency and token usage.
- You can explain where secrets live and how they are protected.
