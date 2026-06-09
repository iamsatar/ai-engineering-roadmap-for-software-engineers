# Mini-Project: Tool-Using Task Agent

## Objective

Build an agent that completes a bounded workflow using tools.

## Example Workflows

- Triage support tickets and draft replies.
- Analyze a pull request and draft review comments.
- Research a customer account and prepare a briefing.
- Convert meeting notes into tasks with owner and due date.

## Requirements

- Define tool schemas.
- Run a bounded agent loop.
- Persist task state.
- Log every tool call.
- Add approval before external side effects.
- Stop after success, failure, or max steps.

## Evaluation

Test:

- Successful task
- Tool failure
- Ambiguous user request
- Malicious instruction in tool output
- Max-step termination

## Deliverables

- Agent code
- Tool docs
- Trace examples
- Eval notes

## Stretch Goals

- Expose tools through MCP.
- Add a planner and executor split.
- Add replayable traces.
