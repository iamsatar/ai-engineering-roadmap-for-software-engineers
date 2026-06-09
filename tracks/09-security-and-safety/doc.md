# Track 09 — Security and Safety

## Summary

This track teaches how to identify and mitigate AI-specific security and safety risks.

## Why This Matters

AI systems combine untrusted users, untrusted documents, model reasoning, and sometimes privileged tools. That creates new attack paths.

## Learning Objectives

By the end of this track, the learner should be able to:

- Explain prompt injection.
- Test indirect prompt injection in retrieved content.
- Limit tool permissions.
- Protect secrets and sensitive data.
- Write a red-team report and mitigation plan.

## Core Topics

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

## Mental Model

Treat user input, retrieved documents, and tool output as untrusted data. The model can read them, but they should not automatically become trusted instructions.

## Recommended Resources

### OWASP Top 10 for LLM Applications

Link: https://owasp.org/www-project-top-10-for-large-language-model-applications/

Why it matters: Practical map of LLM application risks.

Focus on: prompt injection, sensitive data, excessive agency.

Skip: checklist-only thinking.

### OWASP Prompt Injection Prevention Cheat Sheet

Link: https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html

Why it matters: Concrete injection patterns and mitigations.

Focus on: direct and indirect injection.

Skip: relying on prompts alone as a defense.

### MCP Security

Link: https://modelcontextprotocol.io/docs/concepts/security

Why it matters: Tool-connected systems need secure integration patterns.

Focus on: permissions and trust boundaries.

Skip: exposing powerful tools without approval.

## Hands-On Work

Red-team one project, try prompt injection, try unauthorized tool actions, inspect logs, add mitigations, and retest.

## Mini Project

Prompt Injection Test Suite: a threat model, attack case set, mitigation plan, and retest notes for one AI project.

## Deliverables

- Code where applicable
- README
- Tests or evals where applicable
- Notes
- Build-log entry

## Acceptance Criteria

The learner can move on only when:

- At least 20 attack or misuse cases exist.
- Risks are scored.
- Mitigations are documented.
- High-risk cases are retested.

## Common Mistakes

- Assuming system prompts are security boundaries.
- Giving agents broad tool permissions.
- Storing sensitive prompts and outputs in logs.
- Testing only direct prompt injection.

## Interview Practice

- What is indirect prompt injection?
- How do you secure tool-calling agents?
- How do you design human approval?
- What should not be logged?

## Move On When

- [ ] You have a threat model.
- [ ] You have red-team cases.
- [ ] You tested prompt injection.
- [ ] You documented mitigations and residual risk.
