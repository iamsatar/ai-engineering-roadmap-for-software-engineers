# Capstone 03: Agentic Business Workflow Copilot

## Problem

Business teams often work across CRM, email, docs, tickets, and calendars. Build a copilot that gathers context, proposes actions, calls tools, and keeps humans in control.

## Example Workflow

After a customer call, the copilot:

- Summarizes notes
- Looks up account context
- Creates follow-up tasks
- Drafts an email
- Updates CRM fields
- Asks for approval before external updates
- Records an audit trail

## Core Features

- Multi-step task state
- Tool calling
- Human approval
- Structured outputs
- Audit log
- Error recovery
- Role-aware permissions

## AI Requirements

- Planner or workflow controller
- Tool schemas
- State machine or bounded loop
- Context assembly
- Approval policy
- Eval cases for workflow success

## Evaluation

Create test scenarios:

- Normal customer follow-up
- Missing account data
- Conflicting notes
- Tool failure
- Unauthorized requested action
- Malicious instruction in external content

Metrics:

- Workflow completion
- Tool-call correctness
- Approval correctness
- Summary quality
- Audit completeness
- Safety failures

## Security and Safety

Cover:

- Tool permissions
- Customer data privacy
- Prompt injection in external content
- Approval gates
- Auditability

## Portfolio Angle

This capstone is especially strong for Forward Deployed Engineer and Applied AI Engineer roles because it connects AI capability to messy customer workflows.
