# 06: Agents, Tool Use, and Loops

## Goal

Build bounded agents that use tools, maintain task state, recover from failures, and ask humans for approval when needed.

## Concepts

- Tool calling
- Function schemas
- Agent loops
- Planning and reflection
- Memory and state
- MCP
- Human approval gates
- Tool permissions
- Error recovery

## Agent Design Pattern

```txt
Goal -> Plan -> Select tool -> Execute -> Observe -> Decide -> Finish or continue
```

Keep the loop bounded. Production agents need budgets, stop conditions, permissions, and audit trails.

## Hands-On Work

- Define two or three tools with strict schemas.
- Build a loop that can call tools and update task state.
- Add retries and stop conditions.
- Add a human approval step before side effects.

## Failure Modes

- Agent loops forever.
- Tool inputs are malformed.
- Agent takes unauthorized actions.
- Intermediate state becomes inconsistent.
- The model invents tool results.

## Deliverables

- Tool-using agent
- Tool schema docs
- Trace of a completed task
- Failure analysis

## Interview Practice

- Explain the difference between a workflow and an agent.
- Explain MCP in practical terms.
- Explain how you limit agent autonomy.
