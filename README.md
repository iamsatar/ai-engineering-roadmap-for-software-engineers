# AI Engineering Roadmap for Software Engineers

> A build-first roadmap for experienced software engineers learning RAG, agents, evals, context
> engineering, AI systems design, infrastructure, and safety.

This is not a link dump. It is a project-based curriculum for engineers who already ship software
and now want to build, evaluate, operate, and explain production AI systems.

## Start Here

1. Read [ROADMAP.md](./ROADMAP.md) for the full learning sequence.
2. Pick a pace in [STUDY_PLAN.md](./STUDY_PLAN.md).
3. Start with [Track 00 — Orientation & Setup](./tracks/00-orientation-and-setup/doc.md).
4. Build every mini-project before moving on.
5. Write a short build-log entry after each project.
6. Use [PROJECTS.md](./PROJECTS.md) when starting capstones.
7. Use [JOB_READINESS.md](./JOB_READINESS.md) before applying.

Do not try to read everything first. Build from Track 00 onward.

## Who This Is For

Default learner profile:

- Experienced software engineer
- Comfortable with Git, APIs, CI/CD, frontend/backend basics
- Studying 12-15 hours/week
- Targeting AI Engineer, Applied AI Engineer, Agent Engineer, AI Platform Engineer, FDE, or Full
  Stack AI Engineer roles

## Who This Is Not For

This roadmap is not designed for:

- Beginner programmers
- ML researchers focused on model training
- People trying to train foundation models from scratch
- People looking only for prompt hacks
- Computer vision or reinforcement learning specialization
- Deep learning theory as the main goal

## What an AI Engineer Actually Does

An AI Engineer does not just write prompts. They design and ship software systems where model
behavior is one component of a larger product.

Typical work includes:

- Designing LLM-powered workflows
- Building RAG systems over real data
- Creating tool-calling and agentic flows
- Evaluating model outputs and retrieval quality
- Adding observability for traces, cost, latency, and quality
- Handling prompt injection, data leakage, and tool misuse risks
- Turning unclear product or customer problems into reliable AI features

## Curriculum Overview

| Track | Module                                                                                  | Output                             |
| ----- | --------------------------------------------------------------------------------------- | ---------------------------------- |
| 00    | [Orientation & Setup](./tracks/00-orientation-and-setup/doc.md)                         | LLM API Healthcheck                |
| 01    | [LLM Mechanics for Builders](./tracks/01-llm-mechanics-for-builders/doc.md)             | Tokenizer and Embedding Playground |
| 02    | [Context Engineering & Prompting](./tracks/02-context-engineering-and-prompting/doc.md) | Prompt-as-Code Module              |
| 03    | [Embeddings & Retrieval](./tracks/03-embeddings-and-retrieval/doc.md)                   | Tiny Retrieval Service             |
| 04    | [RAG](./tracks/04-rag/doc.md)                                                           | Cited Q&A Bot                      |
| 05    | [Evaluation & Observability](./tracks/05-evaluation-and-observability/doc.md)           | RAG Eval Harness                   |
| 06    | [Agents & Tool Use](./tracks/06-agents-tool-use-and-loops/doc.md)                       | Simple Agent Loop                  |
| 07    | [AI Systems Design](./tracks/07-ai-systems-design/doc.md)                               | AI System Design Document          |
| 08    | [AI Infrastructure Light](./tracks/08-ai-infrastructure-light/doc.md)                   | Simple LLM Router                  |
| 09    | [Security & Safety](./tracks/09-security-and-safety/doc.md)                             | Prompt Injection Test Suite        |
| 10    | [Final Capstones](./tracks/10-final-capstones/doc.md)                                   | Portfolio-grade projects           |

## Progress Tracker

- [ ] Track 00 — Orientation & Setup
- [ ] Track 01 — LLM Mechanics for Builders
- [ ] Track 02 — Context Engineering & Prompting
- [ ] Track 03 — Embeddings & Retrieval
- [ ] Track 04 — RAG
- [ ] Track 05 — Evaluation & Observability
- [ ] Track 06 — Agents & Tool Use
- [ ] Track 07 — AI Systems Design
- [ ] Track 08 — AI Infrastructure Light
- [ ] Track 09 — Security & Safety
- [ ] Track 10 — Final Capstones

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

If you are time-constrained, build one deeply. If you want the strongest portfolio signal, build all
three. For most job applications, two strong capstones are better than three unfinished ones.

### Optional Infrastructure Capstone

4. LLM Gateway / Router

This is recommended for learners targeting AI Platform Engineer or AI Infrastructure Engineer roles.
It is optional for AI Engineer, Applied AI Engineer, Agent Engineer, and FDE paths.

## How To Use This Repo

1. Read [ROADMAP.md](./ROADMAP.md) to understand the full sequence.
2. Pick a pace from [STUDY_PLAN.md](./STUDY_PLAN.md).
3. Work through one track at a time in [tracks/](./tracks).
4. Build each mini-project and write a build-log entry.
5. Use [PROJECTS.md](./PROJECTS.md) for capstone requirements.
6. Use [JOB_READINESS.md](./JOB_READINESS.md) before applying.

## Repository Map

- [ROADMAP.md](./ROADMAP.md): Full curriculum sequence
- [STUDY_PLAN.md](./STUDY_PLAN.md): 8, 12, 16, and 28 week pacing plans
- [PROJECTS.md](./PROJECTS.md): Mini-project and capstone specs
- [RESOURCES.md](./RESOURCES.md): Track-based resource guide
- [JOB_READINESS.md](./JOB_READINESS.md): Portfolio, interview, and application prep
- [tracks/](./tracks): Track docs and mini-projects
- [templates/](./templates): Project, architecture, eval, and build-log templates
- [checklists/](./checklists): Progress and quality checklists
- [examples/](./examples): Starter example specs
- [case-studies/](./case-studies): Case-study templates
- [INSPIRATION.md](./INSPIRATION.md): Inspiration and attribution note
- [build-log/](./build-log): Learning journal

## Estimated Cost

You can complete most of this roadmap with:

- free tiers
- local models
- small eval sets
- capped API usage

Recommended monthly budget for serious practice:

- Low budget: $10-$20/month
- Comfortable budget: $20-$50/month
- Higher experimentation budget: $50-$100/month

Avoid running large, unbounded agent loops until you understand cost tracking, retries, and stop
conditions.

## GitHub Metadata Suggestions

Recommended repo description:

> Project-based AI engineering roadmap for experienced software engineers learning LLM apps, RAG,
> agents, evals, system design, and AI infrastructure.

Recommended topics:

- ai-engineering
- llm
- rag
- agents
- agent-engineering
- ai-systems
- llmops
- evals
- context-engineering
- prompt-engineering
- mcp
- software-engineering
- system-design

## License

MIT. Use, adapt, and share.
