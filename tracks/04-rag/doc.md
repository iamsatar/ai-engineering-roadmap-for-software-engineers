# Track 04 — RAG

## Summary

This track teaches how to build retrieval-augmented generation systems that answer with grounded context, citations, and graceful refusal behavior.

## Why This Matters

RAG is one of the most common applied AI patterns. It is also one of the easiest to demo poorly and one of the hardest to make reliable.

## Learning Objectives

By the end of this track, the learner should be able to:

- Build a complete RAG pipeline.
- Evaluate retrieval separately from generation.
- Add citations and source inspection.
- Refuse when evidence is weak.
- Explain common RAG failure modes.

## Core Concepts

- Document ingestion
- Chunking
- Metadata
- Embeddings
- Retrieval
- Reranking
- Context packing
- Grounded generation
- Citations
- Abstention
- Verification

## Mental Model

RAG is not "upload documents and chat."

RAG is a pipeline:

1. Ingest documents
2. Clean documents
3. Chunk documents
4. Attach metadata
5. Embed chunks
6. Store chunks
7. Retrieve candidates
8. Rerank candidates
9. Pack context
10. Generate answer
11. Cite sources
12. Verify answer
13. Refuse when evidence is weak
14. Log and evaluate the result

## Recommended Resources

### LlamaIndex Docs

Link: https://docs.llamaindex.ai

Why it matters: Strong reference for ingestion, indexing, and retrieval workflows.

Focus on: loaders, chunking, retrievers, response synthesis.

Skip: agents until your RAG pipeline works.

### LangChain Docs

Link: https://docs.langchain.com

Why it matters: Common orchestration patterns and integrations.

Focus on: retrievers, output parsers, tracing.

Skip: unnecessary abstractions.

### Cohere Rerank Docs

Link: https://docs.cohere.com/docs/rerank

Why it matters: Reranking can improve context quality before generation.

Focus on: reranking candidate chunks.

Skip: optimizing before baseline measurement.

### Ragas Docs

Link: https://docs.ragas.io

Why it matters: Useful for RAG-specific eval concepts.

Focus on: faithfulness and context quality.

Skip: treating automatic scores as final truth.

## Hands-On Work

Connect retrieval to generation, force citations, show retrieved chunks, add abstention, and test answerable and unanswerable questions.

## Mini Project

Grounded RAG Assistant: a cited assistant over your corpus with retrieval logs and a 40-question eval set.

## Deliverables

- Code
- README
- Tests or evals where applicable
- Notes
- Build-log entry

## Acceptance Criteria

The learner can move on only when:

- The app answers with citations.
- Retrieved chunks are inspectable.
- Unanswerable questions are tested.
- Retrieval and answer quality are evaluated separately.

## Common Mistakes

- Treating RAG as a simple chatbot over documents.
- Chunking blindly without understanding document structure.
- Using only vector search when keyword/hybrid search would help.
- Not evaluating retrieval separately from generation.
- Not logging retrieved chunks.
- Not testing unanswerable questions.
- Not forcing citations.
- Trusting the model to know when context is insufficient.

## Interview Practice

- Explain RAG end to end.
- Why does RAG still hallucinate?
- How do you evaluate retrieval quality?
- Why does reranking help?
- How do you handle unanswerable questions?

## Move On When

- [ ] Your app answers questions with citations.
- [ ] Your app refuses some unanswerable questions.
- [ ] You have at least 40 eval questions.
- [ ] You can inspect retrieved chunks for any query.
- [ ] You can explain at least 3 RAG failure modes.
- [ ] You can explain why reranking helps.
