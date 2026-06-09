# Resources

This is not a link dump. Use these resources while building the track projects.

## Track 00 — Orientation & APIs

### OpenAI API Docs

URL: https://platform.openai.com/docs

Why it matters: You need to understand the API surface for model calls, streaming, structured
outputs, and tool calling.

Focus on:

- model calls
- structured outputs
- function/tool calling
- streaming
- error handling

Skip:

- fine-tuning
- batch API
- model customization

### Anthropic Claude Docs

URL: https://docs.anthropic.com

Why it matters: Claude is widely used for coding-agent and long-context workflows.

Focus on:

- messages API
- tool use
- structured outputs
- agent workflows

Skip:

- advanced enterprise admin docs
- organization management

## Track 01 — LLM Mechanics

### Hugging Face LLM Course

URL: https://huggingface.co/learn/llm-course

Why it matters: It gives a practical overview of LLM concepts without requiring model research
depth.

Focus on:

- tokenization
- transformer intuition
- inference basics

Skip:

- deep training internals
- research-heavy sections

### Karpathy Tokenizer Video

URL: https://www.youtube.com/watch?v=zduSFxRajkE

Why it matters: Tokenization affects cost, latency, context budgeting, and output behavior.

Focus on:

- how text becomes tokens
- why code and whitespace behave differently
- token budgeting

Skip:

- implementation details that do not affect app design

### Illustrated Transformer

URL: https://jalammar.github.io/illustrated-transformer/

Why it matters: You need a builder-level mental model of attention and context.

Focus on:

- attention intuition
- sequence processing
- why context matters

Skip:

- mathematical derivations

## Track 02 — Context Engineering

### OpenAI Prompt Engineering Guide

URL: https://platform.openai.com/docs/guides/prompt-engineering

Why it matters: It covers practical techniques for instruction design, decomposition, and
reliability.

Focus on:

- clear instructions
- examples
- output constraints
- task decomposition

Skip:

- prompt tricks that do not become testable patterns

### Anthropic Prompt Engineering Guide

URL: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview

Why it matters: It is useful for long-context, instruction-heavy, and document-heavy workflows.

Focus on:

- context ordering
- examples
- XML-style structure
- long-context prompting

Skip:

- provider-specific details you cannot transfer

### OpenAI Structured Outputs

URL: https://platform.openai.com/docs/guides/structured-outputs

Why it matters: Production AI systems need contracts, not fragile free-text parsing.

Focus on:

- schema design
- validation
- refusal or invalid-output handling

Skip:

- advanced schema tricks until your basic schemas work

### OpenAI Prompt Caching

URL: https://platform.openai.com/docs/guides/prompt-caching

Why it matters: Caching changes latency and cost tradeoffs for long-context systems.

Focus on:

- repeated context
- cost reduction
- latency implications

Skip:

- optimization before you have measured baseline cost

## Track 03 — Embeddings & Retrieval

### OpenAI Embeddings Guide

URL: https://platform.openai.com/docs/guides/embeddings

Why it matters: Embeddings are the foundation of semantic search and many RAG systems.

Focus on:

- embedding inputs
- similarity
- retrieval use cases

Skip:

- using embeddings as a magic replacement for search evaluation

### Qdrant Docs

URL: https://qdrant.tech/documentation/

Why it matters: Qdrant is a practical vector database for learning retrieval systems.

Focus on:

- collections
- payload metadata
- filtering
- search

Skip:

- advanced cluster operations at first

### pgvector

URL: https://github.com/pgvector/pgvector

Why it matters: Many production teams prefer adding vector search to Postgres before adopting a
dedicated vector database.

Focus on:

- vector columns
- indexes
- similarity queries
- metadata joins

Skip:

- deep database tuning until you have retrieval evals

## Track 04 — RAG

### LlamaIndex Docs

URL: https://docs.llamaindex.ai

Why it matters: LlamaIndex focuses heavily on data ingestion, indexing, retrieval, and RAG
workflows.

Focus on:

- document loaders
- chunking
- retrievers
- response synthesis

Skip:

- complex agent features until your RAG pipeline works

### LangChain Docs

URL: https://docs.langchain.com

Why it matters: LangChain is common in applied AI projects and useful for orchestration patterns.

Focus on:

- retrievers
- chains
- output parsers
- tracing integrations

Skip:

- unnecessary abstractions for simple projects

### Cohere Rerank Docs

URL: https://docs.cohere.com/docs/rerank

Why it matters: Reranking often improves retrieval quality more than changing generation prompts.

Focus on:

- reranking candidate chunks
- top-k tradeoffs
- relevance scoring

Skip:

- production optimization before measuring retrieval quality

## Track 05 — Evals & Observability

### Ragas Docs

URL: https://docs.ragas.io

Why it matters: Ragas provides RAG-focused evaluation concepts and tooling.

Focus on:

- faithfulness
- answer relevancy
- context precision and recall

Skip:

- treating automatic metrics as final truth

### DeepEval Docs

URL: https://docs.confident-ai.com

Why it matters: DeepEval helps structure LLM app regression tests and quality checks.

Focus on:

- test cases
- metrics
- CI-style evals

Skip:

- large eval suites before you have good examples

### Langfuse Docs

URL: https://langfuse.com/docs

Why it matters: AI apps need traces for model calls, retrieval steps, tool calls, costs, and
latency.

Focus on:

- tracing
- generations
- scores
- datasets

Skip:

- advanced enterprise workflows at first

### OpenTelemetry GenAI

URL: https://opentelemetry.io/docs/specs/semconv/gen-ai/

Why it matters: GenAI observability is becoming more standardized across tools.

Focus on:

- semantic conventions
- trace attributes
- model call metadata

Skip:

- custom telemetry design before understanding the standard

## Track 06 — Agents, Tools & Loops

### Anthropic Building Effective Agents

URL: https://www.anthropic.com/research/building-effective-agents

Why it matters: It distinguishes workflows from agents and emphasizes simple, controlled designs.

Focus on:

- workflow patterns
- agent loops
- evaluator-optimizer patterns
- tool use boundaries

Skip:

- multi-agent complexity before one loop works

### OpenAI Agents SDK

URL: https://openai.github.io/openai-agents-python/

Why it matters: It shows common primitives for agents, tools, handoffs, and tracing.

Focus on:

- tools
- guardrails
- tracing
- handoffs

Skip:

- framework lock-in; learn the underlying concepts

### Model Context Protocol

URL: https://modelcontextprotocol.io

Why it matters: MCP standardizes how AI systems connect to tools and context providers.

Focus on:

- clients
- servers
- tools
- resources
- security

Skip:

- building custom MCP infrastructure before basic tool calling is reliable

### LangGraph Docs

URL: https://langchain-ai.github.io/langgraph/

Why it matters: LangGraph is useful for stateful agent and workflow graphs.

Focus on:

- state
- nodes
- edges
- checkpoints
- human-in-the-loop

Skip:

- complex graph architectures for simple workflows

### Claude Code Docs

URL: https://docs.anthropic.com/en/docs/claude-code

Why it matters: Coding agents are a practical reference for agentic software engineering workflows.

Focus on:

- tool permissions
- coding workflows
- context management

Skip:

- using it as a substitute for understanding agent design

## Track 07 — AI Systems Design

### Designing Data-Intensive Applications

URL: https://www.oreilly.com/library/view/designing-data-intensive-applications/9781098119058/

Why it matters: AI systems still rely on data systems, distributed systems, and operational
tradeoffs.

Focus on:

- data flow
- reliability
- scalability
- maintainability

Skip:

- reading the entire book before building

### ByteByteGo

URL: https://bytebytego.com

Why it matters: It is useful for refreshing system design patterns and diagrams.

Focus on:

- queues
- caching
- databases
- rate limiting
- architecture diagrams

Skip:

- memorizing patterns without applying them to AI workflows

### OpenAI Production Best Practices

URL: https://platform.openai.com/docs/guides/production-best-practices

Why it matters: Production AI systems need reliability, monitoring, safety, and cost control.

Focus on:

- reliability
- safety
- cost management
- monitoring

Skip:

- provider-specific implementation details until design choices are clear

### OpenAI Latency Optimization

URL: https://platform.openai.com/docs/guides/latency-optimization

Why it matters: Latency strongly shapes AI product UX and architecture.

Focus on:

- streaming
- model choice
- prompt size
- parallelization

Skip:

- optimizing before measuring p50 and p95 latency

## Track 08 — AI Infrastructure Light

### LiteLLM Docs

URL: https://docs.litellm.ai

Why it matters: LiteLLM is useful for model routing, provider abstraction, budgets, and gateways.

Focus on:

- proxy
- routing
- budgets
- logging

Skip:

- complex enterprise deployment until a basic gateway works

### vLLM Docs

URL: https://docs.vllm.ai

Why it matters: vLLM helps you understand serving open models and inference performance.

Focus on:

- serving
- throughput
- batching
- deployment tradeoffs

Skip:

- GPU tuning unless you are targeting AI infrastructure roles

### Ollama Docs

URL: https://docs.ollama.com

Why it matters: Local models are useful for low-cost experiments and privacy-sensitive prototypes.

Focus on:

- running local models
- model selection
- local development workflows

Skip:

- assuming local quality matches hosted frontier models

## Track 09 — Security & Safety

### OWASP Top 10 for LLM Applications

URL: https://owasp.org/www-project-top-10-for-large-language-model-applications/

Why it matters: It provides a practical threat model for LLM applications.

Focus on:

- prompt injection
- sensitive information disclosure
- excessive agency
- insecure output handling

Skip:

- treating the list as a compliance checkbox

### OWASP Prompt Injection Prevention Cheat Sheet

URL: https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html

Why it matters: Prompt injection is one of the most important AI-specific risks for RAG and agents.

Focus on:

- direct injection
- indirect injection
- mitigations
- test cases

Skip:

- relying on prompts alone as a defense

### MCP Security

URL: https://modelcontextprotocol.io/docs/concepts/security

Why it matters: Tool-connected agents need permission boundaries and secure integration patterns.

Focus on:

- tool permissions
- user consent
- data exposure
- trust boundaries

Skip:

- exposing powerful tools without approval gates

## Track 10 — Capstones

### OpenAI Function Calling

URL: https://platform.openai.com/docs/guides/function-calling

Why it matters: Capstones often need structured tool calls and reliable output contracts.

Focus on:

- function schemas
- structured arguments
- error handling

Skip:

- complex tool graphs before basic calls are reliable

### Anthropic Tool Use

URL: https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview

Why it matters: Tool use is a core pattern for agents and workflow copilots.

Focus on:

- tool definitions
- tool results
- multi-step tool workflows

Skip:

- unbounded autonomy

## Reference Repos

- https://github.com/iamsatar/learn-harness-engineering
- https://github.com/iamsatar/hands-on-ai-engineering
- https://github.com/iamsatar/ai-engineering-from-scratch
- https://github.com/iamsatar/ai-infra-engineer-learning

Use them for:

- study
- structure
- implementation ideas
- reference patterns

Do not copy them directly.

Forked repos are weak portfolio signals. Original, deployed, evaluated projects are much stronger.
