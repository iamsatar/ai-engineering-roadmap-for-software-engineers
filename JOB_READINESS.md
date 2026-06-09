# Job Readiness

The best portfolio does not say "I know AI." It shows that you can ship, evaluate, debug, and explain AI systems under real constraints.

## Roles To Target

- AI Engineer
- Applied AI Engineer
- AI Applications Engineer
- Agent Engineer
- AI Platform Engineer
- Forward Deployed Engineer
- Product Engineer, AI
- Full Stack AI Engineer

## Roles To Deprioritize

- Prompt Engineer only
- AI Content Specialist
- ML Researcher
- Deep Learning Research Engineer
- Computer Vision Engineer
- Reinforcement Learning Engineer

These roles are not bad roles. They are just not aligned with this roadmap. This roadmap is about applied AI systems built by software engineers, not content operations, model research, computer vision, reinforcement learning, or training deep models from scratch.

# Job Readiness Checklist

You are ready to apply when you can:

## Fundamentals

- [ ] Explain tokenization in practical terms.
- [ ] Explain embeddings and similarity search.
- [ ] Explain context windows and context budgeting.
- [ ] Explain temperature, top-p, and max tokens.

## RAG

- [ ] Build a working RAG app with citations.
- [ ] Explain chunking tradeoffs.
- [ ] Explain vector search vs keyword search vs hybrid search.
- [ ] Explain reranking.
- [ ] Evaluate retrieval quality.
- [ ] Handle unanswerable questions.

## Agents

- [ ] Build a tool-calling agent.
- [ ] Explain the loop: goal -> plan -> act -> observe -> verify -> iterate.
- [ ] Add stop conditions.
- [ ] Add safety boundaries.
- [ ] Explain when not to use agents.

## Evals

- [ ] Build a golden dataset.
- [ ] Run regression tests.
- [ ] Explain LLM-as-judge limitations.
- [ ] Measure faithfulness or groundedness.
- [ ] Track cost and latency.

## Systems Design

- [ ] Design a production RAG system.
- [ ] Design a tool-using agent system.
- [ ] Explain caching, rate limits, queues, retries, and observability.
- [ ] Estimate cost per request.
- [ ] Discuss p95 latency tradeoffs.

## Security

- [ ] Explain prompt injection.
- [ ] Test indirect prompt injection in retrieved docs.
- [ ] Protect secrets.
- [ ] Limit tool permissions.
- [ ] Add human approval for risky actions.

## Portfolio

- [ ] At least one deployed production-grade capstone.
- [ ] Ideally three capstones.
- [ ] Strong README for each.
- [ ] Architecture docs.
- [ ] Eval reports.
- [ ] Demo video or screenshots.
- [ ] Resume bullets.

## Assessment Gates

### Gate 1 — After Track 03

You should be able to:

- explain tokens, embeddings, and context windows
- build a structured-output API call
- build a small retrieval service
- evaluate precision@k manually

### Gate 2 — After Track 05

You should be able to:

- build a RAG app with citations
- create a small golden dataset
- measure faithfulness or groundedness
- trace cost and latency
- explain RAG failure modes

### Gate 3 — After Track 06

You should be able to:

- build a tool-calling agent
- explain goal -> plan -> act -> observe -> verify -> iterate
- add stop conditions
- limit tool permissions
- log every loop step

### Gate 4 — Before Applying

You should have:

- at least one production-grade deployed capstone
- ideally three strong capstones
- eval reports
- architecture docs
- demo videos or screenshots
- resume bullets
- clear explanations of tradeoffs

## Capstone Standard

There are two completion levels.

### Minimum Completion

Build one production-grade capstone deeply.

It must include:

- working application
- deployed demo if possible
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

### Optional Infrastructure Capstone

4. LLM Gateway / Router

This is recommended for learners targeting AI Platform Engineer or AI Infrastructure Engineer roles. It is optional for AI Engineer, Applied AI Engineer, Agent Engineer, and FDE paths.

## Role Signals

### AI Engineer / Applied AI Engineer

Show that you can build product features with LLMs, retrieval, evals, observability, and deployment constraints.

### Agent Engineer

Show bounded agents with tool schemas, state, stop conditions, verification, and approval gates.

### AI Platform Engineer

Show shared infrastructure: routing, tracing, evals, model gateway patterns, cost controls, and developer experience.

### Forward Deployed Engineer

Show that you can understand messy workflows, prototype quickly, integrate tools, explain tradeoffs, and harden what matters.

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
