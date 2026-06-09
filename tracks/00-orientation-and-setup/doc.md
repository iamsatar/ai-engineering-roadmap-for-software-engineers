# Track 00 — Orientation and Setup

## Summary

This track sets up your AI engineering workspace and operating habits.

## Why This Matters

AI systems fail through vague outputs, hidden context bugs, nondeterminism, cost spikes, and silent quality regressions. Your setup should make these visible from day one.

## Learning Objectives

By the end of this track, the learner should be able to:

- Call an LLM from a local app.
- Manage API keys safely.
- Log model calls with useful metadata.
- Track latency, token usage, and errors.
- Maintain a build log.

## Core Topics

- AI app anatomy
- Provider APIs
- Secrets management
- Request tracing
- Cost and latency tracking
- Build-log discipline

## Mental Model

An AI app is a normal software system with a probabilistic model call inside it. Treat the model call like an external dependency that needs logging, error handling, and budgets.

## Recommended Resources

### OpenAI API Docs

Link: https://platform.openai.com/docs

Why it matters: Gives the core model-call API surface.

Focus on: requests, responses, streaming, structured outputs.

Skip: fine-tuning and batch API for now.

### Anthropic Claude Docs

Link: https://docs.anthropic.com

Why it matters: Useful comparison point for long-context and tool-use workflows.

Focus on: messages API and tool use.

Skip: enterprise admin details.

### OpenAI Function Calling

Link: https://platform.openai.com/docs/guides/function-calling

Why it matters: Tool calling appears throughout the roadmap.

Focus on: schemas and error handling.

Skip: complex tool graphs.

## Hands-On Work

Build a tiny CLI or web app that sends a prompt to an LLM and records prompt, response, model, token usage, latency, and errors.

## Mini Project

LLM API Healthcheck: a runnable starter app with safe environment configuration and structured logs.

## Deliverables

- Code
- README
- Tests or evals where applicable
- Notes
- Build-log entry

## Acceptance Criteria

The learner can move on only when:

- One command produces an LLM response.
- Missing API keys are handled.
- Latency and token usage are visible.
- Secrets are not committed.

## Common Mistakes

- Hardcoding API keys.
- Logging sensitive user data without thinking.
- Treating a successful model call as a complete app.
- Skipping build logs.

## Interview Practice

- How do you debug a bad LLM response?
- What metadata do you log for model calls?
- How do you protect API keys?
- How do cost and latency affect product design?

## Move On When

- [ ] You can run the app locally.
- [ ] Logs include model, latency, tokens, and errors.
- [ ] `.env.example` documents required configuration.
- [ ] You wrote your first build-log entry.
