# Track 06 — Agents, Tool Use, and Loops

## Summary

This track teaches how to build bounded agents that use tools, maintain state, verify progress, and
stop safely.

## Why This Matters

Agent demos are easy. Reliable agents require boundaries, tool schemas, verification, permissions,
traces, and human approval.

## Learning Objectives

By the end of this track, the learner should be able to:

- Define reliable tool schemas.
- Build a bounded agent loop.
- Persist task state.
- Validate tool inputs and outputs.
- Add stop conditions and approval gates.
- Explain MCP in practical terms.

## Core Topics

- Tool calling
- Function schemas
- Agent loops
- Planning
- Memory and state
- MCP
- Human approval
- Tool permissions
- Error recovery

## Mental Model

An agent is not a magic chatbot.

A useful agent is a controlled loop:

1. Receive goal
2. Inspect context
3. Plan next step
4. Call a tool
5. Observe result
6. Verify progress
7. Decide whether to continue, retry, escalate, or stop

The hard part is not making the model call tools. The hard part is designing boundaries,
verification, memory, and stop conditions.

## Recommended Resources

### Anthropic Building Effective Agents

Link: https://www.anthropic.com/research/building-effective-agents

Why it matters: Clear distinction between workflows and agents.

Focus on: workflow patterns and agent loops.

Skip: multi-agent complexity at first.

### OpenAI Agents SDK

Link: https://openai.github.io/openai-agents-python/

Why it matters: Shows common agent primitives.

Focus on: tools, guardrails, tracing.

Skip: framework lock-in.

### Model Context Protocol

Link: https://modelcontextprotocol.io

Why it matters: Standard interface for tools and context providers.

Focus on: tools, resources, clients, servers, security.

Skip: MCP before basic tool calling works.

### LangGraph Docs

Link: https://langchain-ai.github.io/langgraph/

Why it matters: Useful for stateful workflow and agent graphs.

Focus on: state, nodes, checkpoints.

Skip: complex graphs for simple tasks.

## Hands-On Work

Define tools, build a bounded loop, persist task state, add retries, validate outputs, and require
approval before side effects.

## Agent Loop Cost Warning

Agents can burn tokens quickly because every loop iteration may include:

- current goal
- context
- tool outputs
- previous attempts
- verification steps
- retries

Before running open-ended loops:

- set a max iteration count
- set a max cost per run
- log token usage
- use small test cases first
- prefer closed loops before open-ended autonomy
- add stop conditions.

## Mini Project

Simple Agent Loop: a bounded workflow agent that uses real tools and logs each loop iteration.

## Deliverables

- Code
- README
- Tests or evals where applicable
- Notes
- Build-log entry

## Acceptance Criteria

The learner can move on only when:

- The agent has a clear goal.
- It uses at least one real tool.
- It validates tool outputs.
- It has a stop condition.
- It fails safely.

## Common Mistakes

- Letting the agent run without a max-iteration limit.
- Using the same agent as both maker and checker.
- Not validating tool inputs and outputs.
- Giving tools too much permission.
- Not logging intermediate steps.
- Treating MCP as mandatory before understanding basic tool calling.
- Building a multi-agent system before one reliable agent works.

## Interview Practice

- What is the difference between a workflow and an agent?
- How do you limit agent autonomy?
- How do you secure tool-calling agents?
- What is MCP?
- When should you not use an agent?

## Move On When

- [ ] Your agent has a clear goal.
- [ ] Your agent uses at least one real tool.
- [ ] Your agent validates tool outputs.
- [ ] Your agent has a verification step.
- [ ] Your agent has a stop condition.
- [ ] Your agent logs each loop iteration.
- [ ] Your agent fails safely when it cannot complete the task.
