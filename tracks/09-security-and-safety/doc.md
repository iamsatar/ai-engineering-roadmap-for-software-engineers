# 09: Security and Safety

## Goal

Identify and mitigate AI-specific security and safety risks in applied systems.

## Concepts

- Prompt injection
- Data exfiltration
- Tool abuse
- Authorization boundaries
- Secrets leakage
- Unsafe outputs
- Privacy
- Audit logging
- Human approval
- Red teaming

## Threat Model

AI systems often combine untrusted user input, untrusted retrieved content, model reasoning, and privileged tools. Treat tool outputs and retrieved documents as data, not instructions.

## Hands-On Work

- Red-team one of your projects.
- Try prompt injection against retrieved content.
- Try to trigger unauthorized tool calls.
- Check logs for sensitive data.
- Add mitigations and retest.

## Failure Modes

- Model follows malicious content in documents.
- User tricks the system into revealing hidden context.
- Agent calls a destructive tool without approval.
- Logs store private or regulated data.
- Safety policy is vague and unenforceable.

## Deliverables

- Threat model
- Red-team cases
- Mitigation plan
- Retest notes

## Interview Practice

- Explain prompt injection.
- Explain how you secure tool-calling agents.
- Explain how you design safe human approval.
