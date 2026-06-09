# Capstone 02: Autonomous PR Review Agent

## Problem

Code reviews are time-consuming, inconsistent, and context-heavy. Build an agent that reviews pull
requests, inspects repository context, identifies risks, and drafts review comments for human
approval.

## Core Features

- Read pull request diff and metadata.
- Inspect relevant files.
- Check project conventions.
- Identify bugs, regressions, missing tests, and unclear changes.
- Draft review comments.
- Require approval before posting.
- Record trace and rationale.

## AI Requirements

- Tool calling for repository inspection
- Bounded agent loop
- Structured finding schema
- Severity classification
- Human approval gate
- Replayable traces

## Evaluation

Create eval cases from small sample PRs:

- Buggy PR
- Safe PR
- Missing test PR
- Style-only PR
- Large noisy PR
- Security-sensitive PR

Metrics:

- True positive findings
- False positive rate
- Severity accuracy
- Comment usefulness
- Tool-call correctness
- Review latency

## Security and Safety

Cover:

- Repository permission boundaries
- Prompt injection in code comments
- Secrets in diffs
- Posting approval
- Audit logs

## Portfolio Angle

This capstone shows agent design, code-aware tool use, evals for subjective outputs, and production
controls.
