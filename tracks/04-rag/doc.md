# 04: RAG

## Goal

Build retrieval-augmented generation systems that answer with grounded context, citations, and graceful failure behavior.

## Concepts

- Retrieval-augmented generation
- Query rewriting
- Context packing
- Citation handling
- Grounded answering
- Abstention
- Reranking
- Answer verification

## RAG Pipeline

```txt
Question -> Query rewrite -> Retrieve -> Rerank -> Pack context -> Generate -> Verify -> Respond
```

## Hands-On Work

- Connect your retrieval service to a generation step.
- Require citations from retrieved sources.
- Add abstention when evidence is weak.
- Test questions with no answer in the corpus.

## Failure Modes

- Hallucinated answer without source support.
- Correct source retrieved but ignored.
- Wrong source cited.
- Answer is too broad because context is noisy.
- The system refuses answerable questions.

## Deliverables

- RAG assistant
- Citation format
- Eval set
- Failure analysis

## Interview Practice

- Explain RAG end to end.
- Explain why RAG still hallucinates.
- Explain how you improve a weak RAG system.
