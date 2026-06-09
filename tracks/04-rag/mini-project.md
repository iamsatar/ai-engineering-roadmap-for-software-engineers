# Mini-Project: Grounded RAG Assistant

## Objective

Build an assistant that answers questions from your corpus using retrieved context and citations.

## Requirements

- Accept a user question.
- Retrieve relevant context.
- Generate an answer with citations.
- Abstain when evidence is missing.
- Show retrieved sources.
- Log query, retrieved IDs, answer, latency, and cost.

## Evaluation

Create at least 40 questions:

- 20 answerable
- 10 partially answerable
- 10 unanswerable

Score:

- Answer correctness
- Citation correctness
- Abstention quality
- Helpfulness

## Deliverables

- RAG app
- Eval dataset
- Eval report
- Build-log entry

## Stretch Goals

- Add reranking.
- Add query rewriting.
- Add answer verification before final response.
