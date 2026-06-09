# Capstone 01: Engineering Knowledge Assistant

## Problem

Engineering teams lose time searching docs, runbooks, incident notes, and code-adjacent knowledge.
Build an assistant that answers engineering questions with grounded citations and clear uncertainty.

## Core Features

- Ingest engineering docs, runbooks, ADRs, and issue notes.
- Chunk, embed, and index content.
- Search with metadata filters.
- Answer questions with citations.
- Abstain when evidence is insufficient.
- Collect user feedback.
- Track quality, cost, and latency.

## AI Requirements

- Query rewriting
- Retrieval and reranking
- Context packing
- Structured answer format
- Citation verification
- Eval dataset

## Evaluation

Create at least 100 eval questions:

- Direct answer questions
- Multi-document synthesis questions
- Out-of-scope questions
- Ambiguous questions
- Incident or runbook questions

Metrics:

- Answer correctness
- Citation correctness
- Abstention quality
- Retrieval top-3 hit rate
- Latency
- Cost per answer

## Security and Safety

Cover:

- Permission-aware retrieval
- Prompt injection inside documents
- Sensitive data in logs
- Source visibility
- Audit trail

## Portfolio Angle

This capstone shows RAG, retrieval evaluation, AI product design, observability, and enterprise
workflow thinking.
