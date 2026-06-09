# Mini-Project: LLM API Healthcheck

## Goal

Build the smallest useful AI engineering app: a local healthcheck that calls an LLM and logs
operational metadata.

## What It Teaches

Provider setup, environment variables, API error handling, request IDs, latency, token usage, and
safe logging.

## Suggested Stack

TypeScript, Node.js, provider SDK, JSONL logs or SQLite.

## Requirements

- Accept a prompt from CLI or a minimal web form.
- Call one LLM provider.
- Print or render the response.
- Log request ID, model, latency, token usage, and errors.
- Load secrets from environment variables.
- Include `.env.example`.

## Acceptance Criteria

- [ ] A documented command runs the healthcheck.
- [ ] Missing API keys fail with a clear message.
- [ ] Provider errors are handled.
- [ ] Logs are useful for debugging and do not include secrets.
- [ ] A build-log entry explains the setup.

## Stretch Goals

- Add cost estimation.
- Add streaming output.
- Add a second provider for comparison.

## README Expectations

Include setup, environment variables, run commands, example output, and logging notes.

## Estimated Time

1-2 days.
