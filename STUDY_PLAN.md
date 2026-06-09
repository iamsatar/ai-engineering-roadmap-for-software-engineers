# Study Plan

Choose a pace based on available time. The 28-week plan is the recommended job-ready path for the
default learner profile: an experienced software engineer studying 12-15 hours/week while working
full-time.

## Rule

Every concept should become code within a few days.

Bad pattern:

- 80% watching
- 20% building

Better pattern:

- 40% studying
- 60% building

## 28-Week Job-Ready Plan

This is the recommended plan for someone studying 12-15 hours per week while working full-time.

Recommended timeline: 6-8 months.

Example calendar path:

- Month 1: setup, LLM mechanics, context engineering
- Month 2: embeddings, retrieval, RAG
- Month 3: evals and observability
- Month 4: agents and tool use
- Month 5: system design and flagship build
- Month 6: AI infra light and security
- Month 7-8: capstone polish and job applications

Example dated path:

- June 2026: setup, LLM mechanics, context engineering
- July 2026: embeddings, retrieval, and RAG
- August 2026: evals and observability
- September 2026: agents and tool use
- October 2026: AI system design and flagship build
- November 2026: AI infrastructure light and security
- December 2026-January 2027: capstone polish
- February 2027: job applications and interview practice

## Weekly Hours Allocation

Baseline: 12-15 hours/week.

| Category                            | Early Phase | Mid Phase | Late Phase |
| ----------------------------------- | ----------: | --------: | ---------: |
| LLM mechanics + context engineering |       3 hrs |      1 hr |     0.5 hr |
| Embeddings, retrieval, and RAG      |       3 hrs |   1.5 hrs |     0.5 hr |
| Agents and tool use                 |       2 hrs |     3 hrs |       1 hr |
| Evals and observability             |     1.5 hrs |     2 hrs |    1.5 hrs |
| AI systems design                   |     1.5 hrs |     2 hrs |       1 hr |
| AI infrastructure                   |       0 hrs |      1 hr |      2 hrs |
| Security and safety                 |       0 hrs |    0.5 hr |       1 hr |
| Capstone build time                 |       3 hrs |     5 hrs |      4 hrs |
| Job prep / writing / portfolio      |        1 hr |      1 hr |      4 hrs |

These are not strict quotas. They show emphasis by phase. Building should stay at 45-60% of total
time.

## Weekly Cadence

| Day       | Focus                             |
| --------- | --------------------------------- |
| Monday    | Theory and notes                  |
| Tuesday   | Build                             |
| Wednesday | System design / architecture      |
| Thursday  | Build                             |
| Friday    | Reading, debugging, and build log |
| Saturday  | Capstone work                     |
| Sunday    | Capstone work + weekly review     |

Building should be at least 50% of the time.

## Phase Breakdown

| Phase   |  Duration | Focus                                                  | Output                                                                         |
| ------- | --------: | ------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Phase 1 |   4 weeks | Setup, LLM mechanics, tokenization, structured outputs | LLM API Healthcheck, Tokenizer and Embedding Playground, Prompt-as-Code Module |
| Phase 2 |   5 weeks | Embeddings, retrieval, RAG                             | Tiny Retrieval Service, Cited Q&A Bot                                          |
| Phase 3 |   4 weeks | Evals and observability                                | RAG Eval Harness, tracing                                                      |
| Phase 4 |   5 weeks | Agents, tool use, loops                                | Simple Agent Loop, PR review agent prototype                                   |
| Phase 5 |   4 weeks | AI system design                                       | Architecture docs, latency/cost budgets                                        |
| Phase 6 |   3 weeks | AI infra light                                         | Simple LLM Router                                                              |
| Phase 7 |   2 weeks | Security and prompt injection                          | Prompt Injection Test Suite                                                    |
| Phase 8 | 4–6 weeks | Capstone polish and job prep                           | Final Capstone Portfolio, applications, interview prep                         |

## 8-Week Intensive

Use this if you can commit 12-15 hours per week and already have strong backend/product instincts.

| Week | Focus        | Output                                                  |
| ---- | ------------ | ------------------------------------------------------- |
| 1    | Tracks 00-01 | LLM API Healthcheck; Tokenizer and Embedding Playground |
| 2    | Track 02     | Prompt-as-Code Module                                   |
| 3    | Track 03     | Tiny Retrieval Service                                  |
| 4    | Track 04     | Cited Q&A Bot                                           |
| 5    | Track 05     | RAG Eval Harness                                        |
| 6    | Track 06     | Simple Agent Loop                                       |
| 7    | Tracks 07-09 | Architecture, infra, security docs                      |
| 8    | Track 10     | Final Capstone Portfolio and job materials              |

## 12-Week Recommended Plan

Use this if you can commit 6-10 hours per week.

| Week | Focus                    | Output                                                   |
| ---- | ------------------------ | -------------------------------------------------------- |
| 1    | Orientation              | Workspace, build log, LLM API Healthcheck                |
| 2    | LLM mechanics            | Tokenizer and Embedding Playground                       |
| 3    | Context engineering      | Prompt-as-Code Module                                    |
| 4    | Embeddings               | Tiny Retrieval Service                                   |
| 5    | Retrieval quality        | Chunking, filters, hybrid search                         |
| 6    | RAG                      | Cited Q&A Bot                                            |
| 7    | RAG hardening            | Reranking, abstention, eval set                          |
| 8    | Evaluation               | Automated and human eval workflow                        |
| 9    | Observability            | Traces, cost, latency, quality dashboard                 |
| 10   | Agents                   | Simple Agent Loop                                        |
| 11   | Systems, infra, security | Architecture and red-team reports                        |
| 12   | Capstone                 | Final Capstone Portfolio, resume bullets, mock interview |

## 16-Week Sustainable Plan

Use this if you can commit 3-5 hours per week.

Spend one week on each track from 00-09, then spend six weeks on a capstone:

- Week 11: choose scope and write architecture
- Week 12: build core workflow
- Week 13: add retrieval, tools, or agent loop
- Week 14: add evals and observability
- Week 15: harden security and UX
- Week 16: polish demo and job materials

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

## Agent Loop Cost Warning

Agents can burn tokens quickly because every loop iteration may include:

- current goal
- context
- tool outputs
- previous attempts
- verification steps
- retries

Before running open-ended loops:

- set a max iteration count
- set a max cost per run
- log token usage
- use small test cases first
- prefer closed loops before open-ended autonomy
- add stop conditions

## Weekly Rhythm

Each week:

- Read the track doc.
- Build the mini-project.
- Write one build-log entry.
- Complete the weekly checklist.
- Record one design tradeoff.
- Record one failure case and how you handled it.

## Time Allocation

Recommended split:

- 20 percent reading and note-taking
- 50 percent building
- 20 percent evaluation and debugging
- 10 percent portfolio writing

If you are short on time, cut passive watching before cutting evals. The eval habit is what
separates AI engineering from prompt tinkering.
