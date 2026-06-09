# Mini-Project: Prompt Regression Harness

## Objective

Build a harness that runs a prompt against a fixed set of cases and reports whether outputs meet expectations.

## Requirements

- Store prompt versions.
- Store test cases.
- Run all cases from a command.
- Validate structured outputs.
- Report pass, fail, and review-needed cases.
- Keep examples of bad outputs.

## Suggested Workflow

Use a task such as:

- Support ticket triage
- Meeting summary extraction
- Bug report classification
- Requirements-to-user-stories conversion

## Evaluation

Include:

- Happy paths
- Ambiguous inputs
- Adversarial instructions inside user content
- Missing information
- Long noisy input

## Deliverables

- Harness code
- Test dataset
- Prompt versions
- Eval report

## Stretch Goals

- Add LLM-as-judge with a human review rubric.
- Add CI integration.
- Add prompt diff notes.
