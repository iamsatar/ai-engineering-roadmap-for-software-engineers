# Projects

Projects are the center of this roadmap. Mini-projects should be small enough to finish in a few days. Capstones should be substantial enough to discuss in interviews.

## Capstone Standard

There are two completion levels.

### Minimum Completion

Build one production-grade capstone deeply.

It must include:

- working application
- strong README
- architecture document
- eval report
- observability notes
- cost and latency notes
- security notes
- demo video or screenshots
- resume bullet points

### Job-Ready Completion

Build three substantial capstones:

1. Engineering Knowledge Assistant
2. Autonomous PR Review Agent
3. Agentic Business Workflow Copilot

If you are time-constrained, build one deeply.
If you want the strongest portfolio signal, build all three.
For most job applications, two strong capstones are better than three unfinished ones.

## Mini-Project: AI Engineering Workspace

### Goal

Create a local workspace that can call an LLM and log operational metadata.

### What It Teaches

API basics, environment management, tracing, latency, cost awareness, and build-log habits.

### Suggested Stack

TypeScript, Node.js, provider SDK, JSONL logs or SQLite.

### Requirements

- Accept a prompt.
- Call a model.
- Log request ID, model, latency, token usage, and errors.
- Load secrets from environment variables.

### Acceptance Criteria

- A new user can run it from documented commands.
- Missing API keys and provider errors are handled.
- Logs are useful for debugging without leaking secrets.

### Stretch Goals

- Add a web UI.
- Add cost estimation.
- Add trace IDs.

### README Expectations

Explain setup, environment variables, run commands, and example output.

### Estimated Time

1-2 days.

## Mini-Project: LLM Behavior Playground

### Goal

Compare model behavior across prompts, settings, and output constraints.

### What It Teaches

Tokenization, context windows, temperature, structured outputs, model choice, and cost tradeoffs.

### Suggested Stack

TypeScript, Node.js, React or CLI, schema validator.

### Requirements

- Change prompt, system message, model, and temperature.
- Show token usage or estimate.
- Validate structured outputs.
- Save comparison runs.

### Acceptance Criteria

- At least five experiments are documented.
- Structured-output failures are detected.
- Cost and latency are visible.

### Stretch Goals

- Add side-by-side model comparison.
- Add prompt version history.

### README Expectations

Include experiment table, screenshots or CLI output, and key lessons.

### Estimated Time

2-3 days.

## Mini-Project: Prompt Regression Harness

### Goal

Make prompt changes testable instead of anecdotal.

### What It Teaches

Prompt specs, regression cases, structured outputs, adversarial inputs, and change control.

### Suggested Stack

TypeScript, Node.js, Zod or JSON Schema, simple test runner.

### Requirements

- Store prompt versions.
- Store test cases.
- Run all cases from one command.
- Validate output contracts.
- Report pass, fail, and review-needed cases.

### Acceptance Criteria

- At least 20 cases exist.
- Prompt changes can be compared across versions.
- Adversarial content is included.

### Stretch Goals

- Add CI.
- Add LLM-as-judge with human review.

### README Expectations

Document the task, prompt contract, eval cases, and failure examples.

### Estimated Time

2-4 days.

## Mini-Project: Semantic Search Service

### Goal

Build a semantic search service over realistic documents.

### What It Teaches

Embeddings, chunking, vector search, metadata, retrieval evaluation, and hybrid search tradeoffs.

### Suggested Stack

TypeScript, Node.js, pgvector or Qdrant, optional Python for experiments.

### Requirements

- Ingest at least 30 document sections.
- Chunk and embed content.
- Store vectors and metadata.
- Return ranked results.
- Evaluate at least 20 queries.

### Acceptance Criteria

- Results include source metadata.
- Retrieval quality is measured.
- Bad retrieval examples are documented.

### Stretch Goals

- Add metadata filters.
- Add keyword plus vector hybrid search.
- Add reranking.

### README Expectations

Explain corpus, chunking, retrieval method, eval set, and results.

### Estimated Time

3-5 days.

## Mini-Project: Grounded RAG Assistant

### Goal

Build a RAG assistant that answers with citations and refuses weakly supported questions.

### What It Teaches

RAG pipelines, query rewriting, context packing, citations, abstention, and answer verification.

### Suggested Stack

TypeScript, Node.js, vector database, model provider SDK, optional reranker.

### Requirements

- Retrieve relevant context.
- Generate grounded answers.
- Include citations.
- Refuse unanswerable questions.
- Log retrieved chunks.
- Evaluate at least 40 questions.

### Acceptance Criteria

- Answers include inspectable citations.
- Unanswerable questions are tested.
- Retrieval and generation failures are separated.

### Stretch Goals

- Add reranking.
- Add answer verification.
- Add feedback collection.

### README Expectations

Include architecture, sample questions, citations, eval results, and failure modes.

### Estimated Time

4-7 days.

## Mini-Project: Eval and Observability Suite

### Goal

Add evals and traces to an AI project.

### What It Teaches

Golden datasets, regression testing, LLM-as-judge limits, traces, cost, latency, and quality monitoring.

### Suggested Stack

TypeScript, Node.js, Langfuse or OpenTelemetry, JSON/CSV eval sets.

### Requirements

- Run eval cases from a command.
- Store results by version.
- Track cost and latency.
- Capture model, retrieval, and tool traces.
- Produce an eval report.

### Acceptance Criteria

- Failures are categorized.
- Results are reproducible.
- At least one regression can be detected.

### Stretch Goals

- Add CI gating.
- Add human review UI.
- Add dashboard screenshots.

### README Expectations

Explain metrics, dataset, trace format, results, and release decision.

### Estimated Time

3-5 days.

## Mini-Project: Tool-Using Task Agent

### Goal

Build a bounded agent that uses real tools to complete a workflow.

### What It Teaches

Tool schemas, loops, state, verification, stop conditions, MCP basics, and human approval.

### Suggested Stack

TypeScript, Node.js, provider SDK, file/API tools, optional LangGraph.

### Requirements

- Define at least one real tool.
- Validate tool inputs and outputs.
- Log each loop step.
- Add max-iteration stop condition.
- Add human approval before side effects.

### Acceptance Criteria

- The agent completes a bounded task.
- Tool failures are handled.
- The agent fails safely when it cannot finish.

### Stretch Goals

- Expose tools through MCP.
- Add replayable traces.
- Split maker and checker roles.

### README Expectations

Document goal, tools, loop design, stop conditions, traces, and safety boundaries.

### Estimated Time

4-7 days.

## Mini-Project: AI Product Architecture Doc

### Goal

Write a production-style architecture document for an AI system.

### What It Teaches

AI system design, data flow, model strategy, eval planning, observability, security, and rollout.

### Suggested Stack

Markdown, Mermaid, architecture template.

### Requirements

- Define users and workflows.
- Include architecture and data-flow diagrams.
- Specify model, retrieval, and tool strategies.
- Define evals, observability, security, rollout, and rollback.

### Acceptance Criteria

- Another engineer can understand and critique the design.
- Failure modes and mitigations are explicit.
- Cost and latency considerations are included.

### Stretch Goals

- Add a cost model.
- Add sequence diagrams.
- Review with another engineer.

### README Expectations

Link the architecture doc from the related project README.

### Estimated Time

1-3 days.

## Mini-Project: LLM Router / Gateway

### Goal

Deploy an AI service with routing, rate limits, fallbacks, and operational controls.

### What It Teaches

AI infrastructure basics, provider abstraction, retries, caching, budgets, and deployment.

### Suggested Stack

TypeScript, Node.js, LiteLLM optional, Redis optional, hosted deployment platform.

### Requirements

- Route requests to at least one provider.
- Add timeouts and retry limits.
- Track cost and latency.
- Add a runbook.
- Document fallback behavior.

### Acceptance Criteria

- Bad provider responses do not crash the service.
- Cost and latency are visible.
- Deployment configuration is documented.

### Stretch Goals

- Add model fallback.
- Add budget alerts.
- Add caching.

### README Expectations

Include setup, routing policy, failure handling, and runbook.

### Estimated Time

3-5 days.

## Mini-Project: AI Security Red-Team Report

### Goal

Red-team one AI project and document mitigations.

### What It Teaches

Prompt injection, data leakage, tool abuse, permission boundaries, audit logs, and residual risk.

### Suggested Stack

Markdown, existing project, optional automated test runner.

### Requirements

- Identify assets and trust boundaries.
- Create at least 20 attack or misuse cases.
- Test prompt injection, data leakage, and tool misuse.
- Add mitigations.
- Retest high-risk cases.

### Acceptance Criteria

- Risks are scored by likelihood and impact.
- Mitigations are concrete.
- Residual risk is documented.

### Stretch Goals

- Add automated attack regression tests.
- Add tool permission scopes.
- Add audit log review workflow.

### README Expectations

Link the red-team report from the project README.

### Estimated Time

2-4 days.

## Capstone: Engineering Knowledge Assistant

### Goal

Build a RAG assistant for engineering teams that answers from docs, runbooks, incidents, and code-adjacent knowledge with citations.

### What It Teaches

Production RAG, retrieval evals, citations, observability, permission-aware data access, and enterprise workflow design.

### Suggested Stack

TypeScript, React, Node.js, Postgres/pgvector or Qdrant, model provider SDK, Langfuse/OpenTelemetry.

### Requirements

- Ingest realistic engineering documents.
- Implement retrieval, reranking, citations, and abstention.
- Provide a usable UI.
- Log retrieval, generation, cost, and latency.
- Evaluate at least 100 questions.

### Production-Grade Requirements

- eval suite
- tracing
- cost tracking
- latency notes
- error handling
- security considerations
- architecture document
- demo video or screenshots
- resume bullets

### Acceptance Criteria

- Users can inspect cited sources.
- Unanswerable questions are handled.
- Retrieval quality is measured separately from answer quality.
- Failure modes are documented.

### Stretch Goals

- Permission-aware retrieval.
- Feedback loop.
- Admin ingestion dashboard.

### README Expectations

Include problem, demo, architecture, eval report, security notes, limitations, and resume bullets.

### Estimated Time

4-8 weeks.

## Capstone: Autonomous PR Review Agent

### Goal

Build an agent that reviews pull requests, inspects repository context, identifies risks, and drafts review comments for human approval.

### What It Teaches

Tool use, agent loops, code reasoning, structured findings, approval gates, and trace-based debugging.

### Suggested Stack

TypeScript or Python, GitHub API, provider SDK, repository tools, trace store.

### Requirements

- Read PR diff and metadata.
- Inspect relevant files.
- Produce structured findings.
- Require approval before posting comments.
- Log every tool call and decision.

### Production-Grade Requirements

- eval suite
- tracing
- cost tracking
- latency notes
- error handling
- security considerations
- architecture document
- demo video or screenshots
- resume bullets

### Acceptance Criteria

- Findings include severity and evidence.
- False positives are tracked.
- Tool permissions are limited.
- Human approval is enforced.

### Stretch Goals

- Add repository-specific style guide retrieval.
- Add test recommendation generation.
- Add replayable review traces.

### README Expectations

Include demo PRs, finding schema, eval results, approval flow, and security notes.

### Estimated Time

4-8 weeks.

## Capstone: Agentic Business Workflow Copilot

### Goal

Build a workflow copilot that gathers context, calls tools, proposes actions, asks for approval, and records an audit trail.

### What It Teaches

FDE-style workflow analysis, tool permissions, human approval, stateful agents, customer data boundaries, and product UX.

### Suggested Stack

TypeScript, React, Node.js, mock CRM/ticket/calendar APIs, provider SDK, trace store.

### Requirements

- Model a realistic business workflow.
- Use tools to gather and update context.
- Persist task state.
- Require approval before external side effects.
- Record audit logs.
- Evaluate workflow success and safety.

### Production-Grade Requirements

- eval suite
- tracing
- cost tracking
- latency notes
- error handling
- security considerations
- architecture document
- demo video or screenshots
- resume bullets

### Acceptance Criteria

- The workflow completes realistic scenarios.
- Unauthorized actions are blocked.
- Tool failures are handled.
- Audit logs are clear.

### Stretch Goals

- Add role-based permissions.
- Add customer-specific configuration.
- Add human escalation workflow.

### README Expectations

Include workflow narrative, screenshots, architecture, evals, security notes, and resume bullets.

### Estimated Time

4-8 weeks.
