# Mini-Project: Semantic Search Service

## Objective

Build a semantic search service over a real document corpus.

## Requirements

- Ingest at least 30 documents or document sections.
- Chunk and embed the corpus.
- Store vectors and metadata.
- Implement search endpoint or CLI.
- Return ranked results with snippets and metadata.
- Track expected result quality for at least 20 queries.

## Suggested Corpora

- API docs
- Engineering runbooks
- Issue comments
- Product docs
- Internal wiki-style notes

## Evaluation

Measure:

- Top-1 hit rate
- Top-3 hit rate
- Bad retrieval examples
- Query classes that perform poorly

## Deliverables

- Search service
- Corpus ingestion script
- Query eval set
- Retrieval quality notes

## Stretch Goals

- Add hybrid keyword plus vector search.
- Add reranking.
- Add metadata filters in the UI.
