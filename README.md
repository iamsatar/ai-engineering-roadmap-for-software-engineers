# AI Engineering Roadmap for Software Engineers

## Tagline

A build-first roadmap for experienced software engineers learning RAG, agents, evals, context engineering, AI systems design, infrastructure, and safety.

## Who This Is For

This roadmap is for software engineers with 4-6+ years of experience who already know how to ship software and want to move into AI Engineer, Applied AI Engineer, Agent Engineer, AI Platform Engineer, Forward Deployed Engineer, or Full Stack AI Engineer roles.

You should already be comfortable with Git, APIs, JavaScript or TypeScript, React, Node.js, backend systems, CI/CD, databases, auth, and deployment basics.

## Who This Is Not For

This roadmap is not designed for:

- Beginner programmers
- ML researchers focused on model training
- People trying to train foundation models from scratch
- People looking only for prompt hacks
- Computer vision or reinforcement learning specialization
- Deep learning theory as the main goal

The focus is applied AI engineering: building useful AI systems on top of models, tools, retrieval, evals, and production infrastructure.

## What an AI Engineer Actually Does

An AI Engineer does not just write prompts. They design and ship software systems where model behavior is one component of a larger product.

Typical work includes:

- Designing LLM-powered workflows
- Building RAG systems over real data
- Creating tool-calling and agentic flows
- Evaluating model outputs and retrieval quality
- Adding observability for traces, cost, latency, and quality
- Handling prompt injection, data leakage, and tool misuse risks
- Turning unclear product or customer problems into reliable AI features

## Learning Philosophy

- Build before collecting links.
- Evaluate before trusting demos.
- Design systems, not isolated prompts.
- Treat AI features as probabilistic distributed systems.
- Keep humans in the loop where risk or ambiguity is high.
- Produce portfolio artifacts while you learn.

## Outcomes

By the end, you should be able to:

- Explain LLM mechanics in practical builder terms
- Use tokenization, context windows, sampling settings, and structured outputs deliberately
- Build reliable workflows with prompts, tools, retrieval, and evaluators
- Design RAG systems with chunking, embedding, retrieval, reranking, grounding, and citations
- Create agent loops with tool calling, planning, memory, guardrails, and human review
- Instrument AI applications with traces, cost, latency, quality, and failure analytics
- Reason about security, safety, prompt injection, data exposure, and abuse cases
- Build capstone projects that demonstrate production judgment
- Discuss AI system design in interviews and customer-facing technical conversations

## Roadmap Structure

| Track | Focus | Output |
|---|---|---|
| 00 | Orientation and Setup | Local AI engineering workspace |
| 01 | LLM Mechanics for Builders | Token and model behavior playground |
| 02 | Context Engineering and Prompting | Prompt regression harness |
| 03 | Embeddings and Retrieval | Semantic search service |
| 04 | RAG | Grounded knowledge assistant |
| 05 | Evaluation and Observability | Eval suite and trace dashboard |
| 06 | Agents, Tool Use, and Loops | Tool-using task agent |
| 07 | AI Systems Design | Architecture doc for an AI product |
| 08 | AI Infrastructure Light | LLM router/gateway |
| 09 | Security and Safety | Red-team and mitigation report |
| 10 | Final Capstones | Portfolio-grade production projects |

## Progress Tracker

- [ ] Track 00 - Orientation & Setup
- [ ] Track 01 - LLM Mechanics for Builders
- [ ] Track 02 - Context Engineering & Prompting
- [ ] Track 03 - Embeddings & Retrieval
- [ ] Track 04 - RAG
- [ ] Track 05 - Evaluation & Observability
- [ ] Track 06 - Agents, Tool Use & Loops
- [ ] Track 07 - AI Systems Design
- [ ] Track 08 - AI Infrastructure Light
- [ ] Track 09 - Security & Safety
- [ ] Track 10 - Final Capstones

## Role-Based Paths

### AI Engineer / Applied AI Engineer

Prioritize:

1. RAG
2. Evals
3. Agents
4. System design
5. Capstone 1 + Capstone 2

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
2. RAG over messy data
3. Tool actions
4. Human approval
5. Product UX and customer-facing explanation

Recommended capstones:

- Agentic Business Workflow Copilot
- Engineering Knowledge Assistant

### AI Platform Engineer

Prioritize:

1. Evals
2. Observability
3. Routing
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

## Study Cadence

Use [STUDY_PLAN.md](./STUDY_PLAN.md) for 8-week, 12-week, 16-week, and 28-week plans.

Rule: every concept should become code within a few days.

Bad pattern:

- 80% watching
- 20% building

Better pattern:

- 40% studying
- 60% building

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

## Suggested Capstone Path

For a strong applied AI portfolio:

1. Build the Engineering Knowledge Assistant to prove RAG, retrieval evals, citations, and observability.
2. Build the Autonomous PR Review Agent to prove tool use, agent loops, code reasoning, and approval gates.
3. Build the Agentic Business Workflow Copilot to prove customer workflow thinking, tool permissions, and FDE-style execution.

## How To Use This Repo

1. Read the current track document.
2. Build the mini-project.
3. Write a build log entry.
4. Complete the checklist.
5. Push your code and notes.
6. Repeat until you have at least one production-grade capstone.

The repo is designed so your learning artifacts become portfolio artifacts: architecture docs, eval reports, demos, tradeoff notes, and working systems.

## Repository Map

- [ROADMAP.md](./ROADMAP.md): Full curriculum sequence
- [STUDY_PLAN.md](./STUDY_PLAN.md): 8, 12, 16, and 28 week pacing plans
- [PROJECTS.md](./PROJECTS.md): Mini-project and capstone index
- [RESOURCES.md](./RESOURCES.md): Track-based resources with links
- [JOB_READINESS.md](./JOB_READINESS.md): Portfolio, interview, and role preparation
- [tracks/](./tracks): Track-by-track lessons and projects
- [templates/](./templates): Reusable docs for projects, architecture, evals, and build logs
- [checklists/](./checklists): Progress and quality checklists
- [examples/](./examples): Starter example specs
- [case-studies/](./case-studies): Case-study templates for portfolio writing
- [build-log/](./build-log): Your weekly learning journal

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

Avoid running large, unbounded agent loops until you understand cost tracking, retries, and stop conditions.

## Provider Neutrality

The concepts matter more than the provider.

You can use:

- OpenAI
- Anthropic
- Gemini
- local models
- OpenRouter
- LiteLLM-compatible providers

The goal is to learn transferable AI engineering patterns, not one vendor's SDK.

## GitHub Repo Metadata Suggestions

Recommended repo description:

> Project-based AI engineering roadmap for experienced software engineers learning LLM apps, RAG, agents, evals, system design, and AI infrastructure.

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

## Quality Bar

This repo should not become a link dump.

Every track should answer:

1. What does this teach?
2. Why does it matter?
3. What should I build?
4. How do I know I am done?
5. How does this help me become job-ready?

Every project should produce:

1. code
2. README
3. tests or evals
4. notes
5. build-log entry

## License

MIT. Use, adapt, and share.
