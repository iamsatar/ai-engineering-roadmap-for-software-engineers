# Track 03 — Embeddings and Retrieval

## Summary

This track teaches semantic search and retrieval quality before you build full RAG.

## Why This Matters

Retrieval is often the quality bottleneck in AI systems. If the right context is not retrieved, the model usually cannot recover.

## Learning Objectives

By the end of this track, the learner should be able to:

- Explain embeddings and similarity search.
- Chunk documents deliberately.
- Add metadata and filters.
- Compare vector, keyword, and hybrid retrieval.
- Measure retrieval quality.

## Core Concepts

- Embeddings
- Vector search
- Chunking
- Metadata
- Hybrid search
- Recall and precision
- Reranking

## Mental Model

Embeddings map text into a space where related meaning should be close. Retrieval quality depends on corpus structure, chunking, metadata, query wording, and ranking.

## Recommended Resources

### OpenAI Embeddings Guide

Link: https://platform.openai.com/docs/guides/embeddings

Why it matters: Core embedding concepts and API usage.

Focus on: embedding inputs and similarity.

Skip: using embeddings without evals.

### Qdrant Docs

Link: https://qdrant.tech/documentation/

Why it matters: Practical vector database reference.

Focus on: collections, payloads, filters, search.

Skip: cluster operations at first.

### pgvector

Link: https://github.com/pgvector/pgvector

Why it matters: Useful when you want vector search inside Postgres.

Focus on: vector columns and indexes.

Skip: deep tuning before measuring quality.

## Hands-On Work

Ingest a realistic corpus, chunk it, embed it, search it, and measure whether expected documents appear in top results.

## Mini Project

Semantic Search Service: an API or CLI that returns ranked snippets with metadata and retrieval eval results.

## Deliverables

- Code
- README
- Tests or evals where applicable
- Notes
- Build-log entry

## Acceptance Criteria

The learner can move on only when:

- At least 30 document sections are indexed.
- At least 20 retrieval queries are evaluated.
- Bad retrieval examples are documented.
- Metadata is returned with results.

## Common Mistakes

- Chunking blindly.
- Ignoring metadata.
- Evaluating generation before retrieval.
- Assuming vector search is always better than keyword search.

## Interview Practice

- How do embeddings work in an application?
- What are chunking tradeoffs?
- How do you evaluate retrieval?
- When would hybrid search help?

## Move On When

- [ ] You can search a realistic corpus.
- [ ] You can inspect retrieved chunks.
- [ ] You have top-k retrieval notes.
- [ ] You can explain one bad retrieval result.
