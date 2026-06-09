# Mini Project — Tiny Retrieval Service

## Goal

Build a small retrieval service over a realistic document corpus.

## What It Teaches

Embeddings, chunking, metadata, vector search, keyword comparison, retrieval evaluation, and
precision@k.

## Suggested Stack

TypeScript, Node.js, pgvector or Qdrant, optional Python for experiments.

## Requirements

- Ingest at least 30 document sections.
- Chunk and embed the corpus.
- Store vectors and metadata.
- Implement search by CLI or API.
- Return ranked snippets with source metadata.
- Evaluate at least 20 queries.

## Acceptance Criteria

- [ ] Search returns ranked results with source IDs.
- [ ] At least 20 queries have expected sources.
- [ ] Precision@k or hit-rate notes exist.
- [ ] Bad retrieval examples are documented.
- [ ] Chunking choices are explained.

## Stretch Goals

- Add metadata filters.
- Add hybrid keyword plus vector search.
- Add reranking.

## README Expectations

Include corpus description, chunking strategy, retrieval method, eval set, results, and failure
cases.

## Estimated Time

3-5 days.
