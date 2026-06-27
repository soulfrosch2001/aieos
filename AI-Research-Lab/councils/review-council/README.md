# Review Council

Status: stable
Type: council
Owner: research-director
Extends: architecture-council

## Purpose
The single question this council answers: **"Are the methods sound and do the
findings hold — is this work fit to stand as the lab's science?"** It is internal
peer review of methodology, statistical validity, reproducibility, and
claim-to-evidence fidelity. As an extension of the stdlib
[architecture-council](../../../councils/architecture-council/README.md), it
reviews the *design and soundness of the science* the way that council reviews the
soundness of a technical design — and it adds research-specific strictness
(reproducibility, replication, statistical correctness).

## Out of scope
- Research ethics, consent, and dual-use risk — that is the
  [ethics-council](../ethics-council/README.md); this council does not adjudicate
  ethics.
- The prose and narrative go/no-go — that is the
  [science-writer](../../04-publication/science-writer/README.md)'s clarity gate.
- Running or redoing experiments — the council **decides, it never builds**
  (Directive [#2](../../../kernel/laws/prime-directives.md)); it sets requirements
  and hands rework to [02-research/](../../02-research/README.md) and
  [03-analysis/](../../03-analysis/README.md).

## Participants
- **Chair** (breaks deadlocks): [research-director](../../01-executive/research-director/README.md)
  (holds the scientific-rigor veto).
- **Core** (must attend): [principal-investigator](../../02-research/principal-investigator/README.md),
  [statistician](../../03-analysis/statistician/README.md),
  [replication-specialist](../../03-analysis/replication-specialist/README.md), and
  the [chief-auditor](../../01-executive/chief-auditor/README.md) (quality veto).
- **Advisory** (as needed): [experimental-designer](../../02-research/experimental-designer/README.md),
  [data-scientist](../../03-analysis/data-scientist/README.md),
  [science-writer](../../04-publication/science-writer/README.md).

## When convened
- **T2** — a study or finding with real methodological choices, per
  [engagement-tiers.md](../../../kernel/laws/engagement-tiers.md) (council sign-off).
- **T3** — a new research direction or cross-department bet (council + executive
  sign-off).

Not standing — convened for one review, then disbanded.

## Inputs
The protocol and pre-registration, raw and processed data with the analysis code,
the statistical plan and results, replication status, and prior review minutes from
[../../memory/registers/findings.md](../../memory/registers/findings.md).

## Index
- [process.md](process.md)
- [output.md](output.md)
