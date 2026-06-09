# Simple Agent Loop Example

## What This Demonstrates

How to build a bounded agent loop that selects a tool, observes the result, verifies progress, and stops.

## Why It Matters

The hard part of agents is not calling tools. The hard part is boundaries, state, verification, and stopping safely.

## Files To Create Later

- `src/tools.ts`
- `src/agent.ts`
- `src/state.ts`
- `src/run.ts`
- `fixtures/tasks.json`
- `traces/`

## Acceptance Criteria

- [ ] The agent has a clear task goal.
- [ ] The agent can call at least one real tool.
- [ ] Tool inputs and outputs are validated.
- [ ] Each loop iteration is logged.
- [ ] The loop has a max-iteration limit.
- [ ] The agent fails safely when stuck.

## Stretch Goals

- Add human approval before side effects.
- Add replayable traces.
- Add a checker step separate from the maker step.
