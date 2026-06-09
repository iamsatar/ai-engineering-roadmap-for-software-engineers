# Structured Output Example

## What This Demonstrates

How to ask a model for output that conforms to a schema, validate it, and handle invalid or refused outputs.

## Why It Matters

Production AI apps should pass structured data between components. Parsing free text is fragile.

## Files To Create Later

- `src/schema.ts`
- `src/run.ts`
- `src/validate.ts`
- `fixtures/inputs.json`
- `README.md`

## Acceptance Criteria

- [ ] The example defines a strict schema.
- [ ] Valid model output passes validation.
- [ ] Invalid model output fails validation.
- [ ] The app handles refusal or missing fields.
- [ ] The README includes sample input and output.

## Optional Stretch Goals

- Add multiple schema versions.
- Add a prompt regression test.
- Compare two models on schema adherence.
