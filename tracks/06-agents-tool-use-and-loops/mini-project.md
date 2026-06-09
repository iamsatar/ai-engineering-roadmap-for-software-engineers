# Mini-Project: Simple Agent Loop

## Goal

Build a bounded tool-calling agent that completes one narrow workflow safely.

## What It Teaches

Tool schemas, state, loop control, verification, max iterations, cost limits, approval gates, and
failure recovery.

## Suggested Stack

TypeScript, Node.js, provider SDK, local file/API tools, optional LangGraph or MCP.

## Requirements

- Define at least one real tool.
- Validate tool inputs and outputs.
- Persist task state.
- Log each loop iteration.
- Add max-iteration and max-cost limits.
- Add a verification step.
- Require approval before side effects.

## Acceptance Criteria

- [ ] The agent has a clear goal.
- [ ] The agent uses at least one real tool.
- [ ] Tool outputs are validated.
- [ ] Each loop step is logged.
- [ ] The agent stops on success, failure, or max steps.
- [ ] The agent fails safely when stuck.

## Stretch Goals

- Expose one tool through MCP.
- Add replayable traces.
- Split maker and checker roles.

## README Expectations

Include workflow, tools, loop design, stop conditions, cost warning, traces, and safety boundaries.

## Estimated Time

4-7 days.
