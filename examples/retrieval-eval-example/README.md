# Retrieval Eval Example

## What This Demonstrates

How to evaluate whether retrieval returns the right documents before using those documents in generation.

## Why It Matters

RAG quality often fails at retrieval. If the right chunks are missing, the answer will likely be wrong or unsupported.

## Files To Create Later

- `corpus/`
- `queries.json`
- `expected-results.json`
- `src/ingest.ts`
- `src/search.ts`
- `src/evaluate.ts`

## Acceptance Criteria

- [ ] At least 20 queries exist.
- [ ] Each query has expected source IDs.
- [ ] The eval reports top-1 and top-3 hit rate.
- [ ] Bad retrieval examples are saved.
- [ ] The README explains what changed after tuning.

## Optional Stretch Goals

- Add keyword search.
- Add hybrid search.
- Add reranking.
