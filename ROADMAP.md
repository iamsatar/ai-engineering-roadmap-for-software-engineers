# Roadmap

This roadmap assumes you are already a capable software engineer. The goal is to add applied AI engineering judgment: how to build systems that use models, tools, retrieval, evaluation, and operations responsibly.

Default learner profile:

- Experienced software engineer
- Comfortable with Git, APIs, CI/CD, frontend/backend basics
- Studying 12-15 hours/week
- Targeting AI Engineer, Applied AI Engineer, Agent Engineer, AI Platform Engineer, FDE, or Full Stack AI Engineer roles

## How This Differs From Zero-to-Hero Roadmaps

This roadmap does not spend months on beginner programming, DSA drills, calculus, deep learning from scratch, computer vision, reinforcement learning, or model pretraining.

It assumes software engineering maturity and focuses on the AI systems layer:

- LLM application behavior
- context engineering
- structured outputs
- embeddings and retrieval
- RAG
- evals and observability
- agents and tool use
- AI system design
- infrastructure basics
- security and safety
- portfolio-grade capstones

## What To Skip Or Deprioritize

Deprioritize these unless they directly support a project:

- training foundation models
- implementing transformers from scratch
- computer vision specialization
- reinforcement learning specialization
- prompt-hack collections
- generic beginner programming content
- forked tutorial repos as portfolio projects

## Principles

- Build before collecting links.
- Evaluate before trusting demos.
- Design systems, not isolated prompts.
- Prefer observable workflows over magic.
- Keep humans in the loop where risk or ambiguity is high.
- Treat AI features as probabilistic distributed systems.

## Phase 1: Builder Foundations

### Track 00: Orientation and Setup

Set up an AI engineering workspace with API access, environment management, tracing, basic evals, and a build-log habit.

Deliverable: LLM API Healthcheck.

### Track 01: LLM Mechanics for Builders

Learn practical model behavior: tokens, context windows, sampling, latency, output constraints, structured outputs, and model selection.

Deliverable: Tokenizer and Embedding Playground.

### Track 02: Context Engineering and Prompting

Move from ad hoc prompting to context design: instructions, examples, decomposition, state, constraints, and regression tests.

Deliverable: Prompt-as-Code Module.

Connection: Track 02 turns model behavior from Track 01 into testable application behavior.

## Phase 2: Retrieval and Grounding

### Track 03: Embeddings and Retrieval

Learn embeddings, vector search, hybrid search, metadata filters, chunking, recall, and retrieval quality.

Deliverable: Tiny Retrieval Service.

Connection: Track 03 gives Track 04 the retrieval layer needed for grounded answers.

### Track 04: RAG

Build retrieval-augmented generation systems with grounding, citations, reranking, query rewriting, and answer verification.

Deliverable: Cited Q&A Bot.

Connection: Track 04 creates the system that Track 05 will evaluate and observe.

## Phase 3: Quality, Agents, and Systems

### Track 05: Evaluation and Observability

Create eval sets, automated graders, human review loops, trace instrumentation, cost analysis, and production dashboards.

Deliverable: RAG Eval Harness.

Connection: Track 05 gives Track 06 the measurement discipline needed before adding agent loops.

### Track 06: Agents, Tool Use, and Loops

Learn tool calling, planning loops, memory, task state, MCP, error recovery, approvals, and agent boundaries.

Deliverable: Simple Agent Loop.

Connection: Track 06 introduces controlled autonomy that Track 07 will place into a full system design.

### Track 07: AI Systems Design

Design AI systems with product constraints, data flows, failure modes, eval gates, security controls, and operational requirements.

Deliverable: AI System Design Document.

Connection: Track 07 turns project experience into interview-ready systems thinking.

## Phase 4: Production Readiness

### Track 08: AI Infrastructure Light

Learn deployment, queues, caching, rate limits, fallbacks, model routing, vector databases, secrets, and cost controls.

Deliverable: Simple LLM Router.

Connection: Track 08 makes earlier projects deployable and operable.

### Track 09: Security and Safety

Study prompt injection, tool abuse, data leakage, unsafe outputs, privacy, authorization, audit logs, and red-team workflows.

Deliverable: Prompt Injection Test Suite.

Connection: Track 09 hardens earlier systems before final portfolio work.

### Track 10: Final Capstones

Build at least one production-grade portfolio project. One deep capstone is the minimum completion level. Three substantial capstones is the job-ready path.

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

## Role-Based Paths

### AI Engineer / Applied AI Engineer

Prioritize:

1. RAG
2. Evals
3. Agents
4. System design
5. Product-quality capstones

Recommended capstones:

- Engineering Knowledge Assistant
- Autonomous PR Review Agent

### Agent Engineer

Prioritize:

1. Tool calling
2. Agent loops
3. MCP
4. Memory and state
5. Verification and stop conditions

Recommended capstones:

- Autonomous PR Review Agent
- Agentic Business Workflow Copilot

### Forward Deployed Engineer

Prioritize:

1. Business workflow analysis
2. RAG over messy real-world data
3. Tool actions
4. Human approval flows
5. Customer-facing UX and explanation

Recommended capstones:

- Agentic Business Workflow Copilot
- Engineering Knowledge Assistant

### AI Platform Engineer

Prioritize:

1. Evals
2. Observability
3. Model routing
4. Caching
5. Cost and latency controls

Recommended capstones:

- LLM Gateway / Router
- Engineering Knowledge Assistant
- Autonomous PR Review Agent

### Full Stack AI Engineer

Prioritize:

1. Product UX
2. RAG
3. Tool calling
4. Streaming UI
5. Auth and deployment

Recommended capstones:

- Engineering Knowledge Assistant
- Agentic Business Workflow Copilot

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

## Completion Standard

You are done when you can explain not just what you built, but:

- Why the design is appropriate
- What can fail
- How you detect failures
- How you measure quality
- How you control cost
- How you protect users and data
- What you would improve with more time
