# Ethics Council

Status: stable
Type: council
Owner: ethics-officer
Extends: security-council

## Purpose
The single question this council answers: **"Is it ethically and societally
acceptable to do — and to publish — this work, and what are we accepting if we say
yes?"** It owns research-ethics review and the release-risk sign-off: human/animal
subjects, consent, data privacy, dual-use and misuse potential, conflict-of-interest
disclosure, and research-misconduct concerns. As an extension of the stdlib
[security-council](../../../councils/security-council/README.md), it is a **gate**:
an ethics no-go cannot be overridden on non-ethics grounds, exactly as a security
no-go cannot be overridden by a release-on-schedule argument.

## Out of scope
- Scientific soundness and reproducibility — that is the
  [review-council](../review-council/README.md); this council reviews work for
  ethics, it does not judge methods.
- The prose and narrative — the [science-writer](../../04-publication/science-writer/README.md).
- Doing the science — the council **decides, it never builds** (Directive
  [#2](../../../kernel/laws/prime-directives.md)); it sets ethics requirements and
  hands execution to departments.

## Participants
- **Chair** (breaks deadlocks): [ethics-officer](../../04-publication/ethics-officer/README.md)
  (holds the ethics veto).
- **Core** (must attend): [principal-investigator](../../02-research/principal-investigator/README.md),
  the [research-director](../../01-executive/research-director/README.md), and the
  [chief-auditor](../../01-executive/chief-auditor/README.md) (quality/ethics veto).
- **Advisory** (as needed): [science-writer](../../04-publication/science-writer/README.md),
  [data-scientist](../../03-analysis/data-scientist/README.md) (privacy/de-identification),
  and the [lab-director](../../01-executive/lab-director/README.md) on a high-stakes
  disclosure.

## When convened
- **T2** — work with a real ethics or privacy surface, per
  [engagement-tiers.md](../../../kernel/laws/engagement-tiers.md) (council sign-off).
- **T3** — dual-use findings or strategic disclosure decisions (council + executive).
- **T4** — a live ethics/misconduct crisis (fabrication, harm, breach of consent);
  convenes as an all-hands incident gate.

Not standing — convened for one question, then disbanded.

## Inputs
Consent documentation, data-handling and de-identification plan, the dual-use /
misuse assessment, conflict-of-interest and funding disclosures, and prior ethics
minutes from [../../memory/registers/findings.md](../../memory/registers/findings.md).

## Index
- [process.md](process.md)
- [output.md](output.md)
