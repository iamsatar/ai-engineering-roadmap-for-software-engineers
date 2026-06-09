# Job Readiness

The best portfolio does not say "I know AI." It shows that you can ship, evaluate, debug, and explain AI systems under real constraints.

## Target Roles

### AI Engineer

Signals:

- Builds product features with LLMs and AI APIs
- Understands retrieval, evals, observability, and deployment
- Can reason through model selection and UX tradeoffs

### Applied AI Engineer

Signals:

- Turns business problems into AI workflows
- Integrates models with existing systems
- Designs reliable human-in-the-loop flows

### Agent Engineer

Signals:

- Builds tool-using agents with bounded autonomy
- Handles state, planning, retries, approvals, and failure recovery
- Understands MCP and tool interface design

### AI Platform Engineer

Signals:

- Builds shared AI infrastructure
- Works on model routing, eval platforms, tracing, vector stores, and governance
- Cares about reliability, cost, and developer experience

### Forward Deployed Engineer

Signals:

- Works close to customers and messy real-world workflows
- Can prototype quickly and harden what matters
- Communicates tradeoffs clearly with technical and non-technical stakeholders

## Portfolio Requirements

At minimum, prepare:

- One polished capstone repository
- One architecture doc
- One eval report
- One security and safety report
- One demo video or live demo script
- Three concise case-study bullets for your resume

## Interview Topics

Be ready to discuss:

- How LLMs use context
- Token and latency tradeoffs
- Structured outputs and tool calling
- Embeddings and vector search
- RAG failure modes
- Evaluation design
- Observability and debugging
- Agent loop boundaries
- Prompt injection and data leakage
- Human approval design
- Cost and rate-limit management

## Resume Bullet Formula

Use:

`Built [AI system] for [user/problem], using [technical approach], improving/measuring [quality, cost, latency, reliability, or workflow outcome].`

Examples:

- Built a RAG assistant for engineering runbooks using hybrid retrieval, reranking, citations, and abstention logic, evaluated with a 120-question golden set.
- Built a PR review agent with repository-aware tool calls, risk classification, human approval gates, and trace-based debugging.
- Designed an AI workflow copilot with audit logs, role-based tool permissions, eval gates, and production cost controls.

## Mock System Design Prompts

- Design a customer support RAG assistant for a SaaS company.
- Design an AI copilot for incident response.
- Design an agent that updates CRM records after sales calls.
- Design a code review assistant for a large engineering organization.
- Design an internal AI platform for 200 engineers.

For each prompt, explain users, data sources, model choices, retrieval, tools, evals, observability, security, and rollout.
