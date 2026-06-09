# Roadmap

This roadmap assumes you are already a capable software engineer. The goal is to add applied AI engineering judgment: how to build systems that use models, tools, retrieval, evaluation, and operations responsibly.

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

Deliverable: a runnable starter app that calls an LLM, records inputs and outputs, and logs cost and latency.

### Track 01: LLM Mechanics for Builders

Learn practical model behavior: tokens, context windows, sampling, latency, output constraints, structured outputs, and model selection.

Deliverable: an LLM behavior playground that compares prompts, model settings, schema constraints, and token costs.

### Track 02: Context Engineering and Prompting

Move from ad hoc prompting to context design: instructions, examples, decomposition, state, constraints, and regression tests.

Deliverable: a prompt regression harness for a realistic workflow.

## Phase 2: Retrieval and Grounding

### Track 03: Embeddings and Retrieval

Learn embeddings, vector search, hybrid search, metadata filters, chunking, recall, and retrieval quality.

Deliverable: a semantic search service over a real document corpus.

### Track 04: RAG

Build retrieval-augmented generation systems with grounding, citations, reranking, query rewriting, and answer verification.

Deliverable: a RAG assistant with source citations and failure handling.

## Phase 3: Quality, Agents, and Systems

### Track 05: Evaluation and Observability

Create eval sets, automated graders, human review loops, trace instrumentation, cost analysis, and production dashboards.

Deliverable: an eval suite and observability dashboard for your RAG system.

### Track 06: Agents, Tool Use, and Loops

Learn tool calling, planning loops, memory, task state, MCP, error recovery, approvals, and agent boundaries.

Deliverable: a tool-using task agent that can complete a bounded workflow.

### Track 07: AI Systems Design

Design AI systems with product constraints, data flows, failure modes, eval gates, security controls, and operational requirements.

Deliverable: a professional architecture document for a production AI product.

## Phase 4: Production Readiness

### Track 08: AI Infrastructure Light

Learn deployment, queues, caching, rate limits, fallbacks, model routing, vector databases, secrets, and cost controls.

Deliverable: a deployed AI service with operational controls.

### Track 09: Security and Safety

Study prompt injection, tool abuse, data leakage, unsafe outputs, privacy, authorization, audit logs, and red-team workflows.

Deliverable: a red-team report and mitigation plan for one of your projects.

### Track 10: Final Capstones

Build at least one production-grade portfolio project. One deep capstone is the minimum completion level. Three substantial capstones is the job-ready path.

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

## Role-Based Paths

### AI Engineer / Applied AI Engineer

Prioritize RAG, evals, agents, system design, and Capstone 1 + Capstone 2.

### Agent Engineer

Prioritize tool calling, agent loops, MCP, memory and state, verification, and stop conditions.

### Forward Deployed Engineer

Prioritize business workflow analysis, RAG over messy data, tool actions, human approval, product UX, and customer-facing explanation.

### AI Platform Engineer

Prioritize evals, observability, routing, caching, cost controls, latency controls, and gateway patterns.

### Full Stack AI Engineer

Prioritize product UX, RAG, tool calling, streaming UI, auth, and deployment.

## Completion Standard

You are done when you can explain not just what you built, but:

- Why the design is appropriate
- What can fail
- How you detect failures
- How you measure quality
- How you control cost
- How you protect users and data
- What you would improve with more time
