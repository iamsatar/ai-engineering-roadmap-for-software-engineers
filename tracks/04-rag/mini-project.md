# Mini Project — Cited Q&A Bot

## Goal

Build a RAG assistant that answers questions from retrieved context with citations and refusal
behavior.

## What It Teaches

RAG pipelines, query rewriting, retrieval, reranking, context packing, grounded generation,
citations, abstention, and answer verification.

## Suggested Stack

TypeScript, Node.js, React or CLI, vector database, provider SDK, optional reranker.

## Requirements

- Accept a user question.
- Retrieve relevant chunks.
- Show retrieved sources.
- Generate an answer with citations.
- Refuse when evidence is weak.
- Log query, retrieved IDs, answer, latency, and cost.
- Evaluate at least 40 questions.

## Acceptance Criteria

- [ ] Answers include citations.
- [ ] Retrieved chunks are inspectable.
- [ ] Some unanswerable questions are refused.
- [ ] Retrieval quality is evaluated separately from answer quality.
- [ ] Failure modes are documented.

## Stretch Goals

- Add reranking.
- Add query rewriting.
- Add answer verification before final response.
- Add user feedback.

## README Expectations

Include architecture, sample questions, citation format, eval results, cost/latency notes, and known
limitations.

## Estimated Time

4-7 days.
