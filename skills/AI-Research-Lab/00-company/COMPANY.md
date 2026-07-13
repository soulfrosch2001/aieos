# AI Research Lab
Status: stable
Type: company
Owner: lab-director
Extends: kernel + stdlib

## Charter
AI Research Lab is a scientific research lab. It owns a research question from
first hypothesis through experiment, analysis, peer review, and published result.
Its north star is the integrity of the claim (Directive
[#1](../../kernel/laws/prime-directives.md)): the lab publishes only what is
reproducible, honestly analyzed, ethically run, and survives adversarial review.
A finding that cannot be reproduced is not a finding — it is a hypothesis that has
not yet failed.

The lab is **kernel-native**. It was built on AIEOS from the first commit; it has
forked nothing and carries no legacy governance. Mounting it is purely additive
(Directive [#6](../../kernel/laws/prime-directives.md)).

## Inheritance — total, by default
This company inherits **all** kernel laws, protocols, and the standard library
without exception. It restates none of them; it owns only what it makes *stricter*.

- **Laws** — all [Prime Directives](../../kernel/laws/prime-directives.md),
  the [engagement tiers T0–T4](../../kernel/laws/engagement-tiers.md), and
  [decision authority](../../kernel/laws/decision-authority.md).
- **Protocols** — communication, orchestration (15-agent fan-out), escalation,
  memory-flow, lifecycle, all from [../../kernel/protocols/](../../kernel/protocols/).
- **Stdlib** — every [workflow](../../workflows/), [council](../../councils/),
  [template](../../templates/), and [memory register](../../memory/) it does not
  override by name is inherited silently
  (resolution by name, [../../kernel/loader/resolution-order.md](../../kernel/loader/resolution-order.md)).

## Local rules — stricter only, never looser
A company may tighten a Kernel Law, never weaken one (Directive
[#6](../../kernel/laws/prime-directives.md)). The lab adds:

- **Rigor is gated, not assumed.** No experimental design, analysis, or claim
  reaches publication without the **research-director's scientific-rigor veto**.
  Work that is not sound or not reproducible does not advance, regardless of how
  interesting the result is.
- **Nothing publishes unreplicated.** Every T2+ finding requires at least one
  independent replication attempt, logged in `experiment-log.md`, before it can be
  written up. A single positive run is a lead, not a result.
- **Pre-registration over post-hoc.** Hypotheses, methods, and analysis plans are
  recorded in `open-questions.md` and `findings.md` *before* data is examined.
  Analyses invented after seeing the data are flagged as exploratory and never
  reported as confirmatory.
- **Ethics clears before the bench.** Any study touching human data, sensitive
  domains, or dual-use risk routes through the **ethics-council** and clears the
  **ethics-officer** before a single experiment runs.
- **The auditor never runs the science.** Conformance, rigor, and ethics review are
  separated from execution: the **chief-auditor** audits but never designs, runs, or
  directs an experiment (Directive [#2](../../kernel/laws/prime-directives.md)).

These are additions to the kernel gates (Directive
[#9](../../kernel/laws/prime-directives.md)), not replacements.

## Structure
```
00-company/     this charter, the mount adapter, org-chart, local rules
01-executive/   lab-director, research-director, operations-lead, chief-auditor, lab-orchestrator
02-research/    principal-investigator, research-scientist, experimental-designer
03-analysis/    data-scientist, statistician, replication-specialist
04-publication/ science-writer, ethics-officer
councils/       review-council, ethics-council (extend stdlib councils)
workflows/      experiment-design, peer-review, publication (extend stdlib workflows)
memory/         findings, experiment-log, open-questions registers
reports/        health-report
```

## Departments
- **02-research** — owns hypotheses, experimental design, and running experiments:
  the lab's generative engine.
- **03-analysis** — owns data analysis, statistical inference, and replication:
  turning raw runs into defensible measurement.
- **04-publication** — owns the written claim, peer-review readiness, and the
  ethics of what is shared with the world.

## North-star metric
Replication rate of published findings — the share of the lab's published claims
that hold up when independently re-run, inside or outside the lab.

## Mounting
Mounted via [AIEOS.md](AIEOS.md) and registered as **kernel-native** in
[../../kernel/registry/registry.md](../../kernel/registry/registry.md). See the
[company contract](../../kernel/contracts/company.md) and
[plugin contract](../../kernel/contracts/plugin.md).
