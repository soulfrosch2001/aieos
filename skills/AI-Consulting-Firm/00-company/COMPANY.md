# AI Consulting Firm
Status: stable
Type: company
Owner: managing-partner
Extends: kernel + stdlib

## Charter
AI Consulting Firm is a management consulting firm. We take a client's hardest
problem and run it through one continuous line of work — **diagnosis**
(02-diagnosis/), **strategy** (03-strategy/), and **implementation**
(04-implementation/). We find out what is actually true, decide what to do about
it, and then help make it real. An insight that never changes how the client
operates has not earned its fee.

Our north star (Directive #1): the client's outcome, not the thickness of the
deck. Every recommendation is grounded in evidence we can defend and is owned by
the engagement that will have to deliver it. We chartered under Government
decision 0001 and we were born on AIEOS.

We are **kernel-native**. We forked nothing
([Directive #6](../../kernel/laws/prime-directives.md)). Everything we do not
override here, we inherit from the kernel and the standard library.

## Inherited from AIEOS (source of truth)
- **Laws** — all [Prime Directives](../../kernel/laws/prime-directives.md),
  in particular #2 (the orchestrator routes, never delivers), #4 (fan out up to
  15 parallel tracks), #5 (no company-to-company contact except via Government),
  #6 (inherit, don't fork), and #8 (memory is append-mostly).
- **Engagement tiers** — [T0–T4](../../kernel/laws/engagement-tiers.md) size
  every engagement before any analysis begins.
- **Decision authority** — [decision-authority.md](../../kernel/laws/decision-authority.md);
  our five executives bind to its levels (see [AIEOS.md](AIEOS.md)).
- **Protocols** — [communication](../../kernel/protocols/communication.md),
  [orchestration](../../kernel/protocols/orchestration.md) (15-agent fan-out),
  [escalation](../../kernel/protocols/escalation.md),
  [memory-flow](../../kernel/protocols/memory-flow.md),
  [lifecycle](../../kernel/protocols/lifecycle.md),
  [reporting](../../kernel/protocols/reporting.md).
- **Loader** — [resolution-order.md](../../kernel/loader/resolution-order.md)
  governs how a local name shadows a stdlib name.
- **Stdlib defaults** — every workflow, council, template, and memory register
  we do not override by name below.

## Local rules (stricter only — never looser)
A company may add stricter local authority; it may never weaken a Kernel Law
([Directive #6](../../kernel/laws/prime-directives.md)). Ours:

1. **The methodology veto is real and it is the engagement-director's alone.**
   Any engagement may be stopped on analytical-rigor grounds before it advances a
   tier. This is stricter than the stdlib CTO-level technical veto: here the veto
   explicitly covers method — sampling, attribution, and the chain from evidence
   to recommendation.
2. **No recommendation leaves the firm without quality sign-off.** The
   chief-auditor's quality veto ([decision-authority.md](../../kernel/laws/decision-authority.md))
   is binding on every deliverable. The auditor never delivers client work and
   never directs (Directive #2) — they only gate.
3. **Every claim is sourced before it is presented.** A number without a
   traceable source does not enter a deck. We do not defer evidence to "later in
   the engagement."
4. **Every engagement decision of consequence is recorded before it is acted on**
   (Directive #8) in [engagement-decisions](../../AI-Consulting-Firm/memory/registers/engagement-decisions.md).
   Append, never erase.

## Structure
```
00-company/        this charter, org-chart, local rules (stricter only)
01-executive/      managing-partner, engagement-director, operations-partner, chief-auditor, engagement-orchestrator
02-diagnosis/      business-analyst, data-analyst, research-lead
03-strategy/       strategy-consultant, financial-modeler, market-strategist
04-implementation/ implementation-lead, change-manager
councils/          engagement-council, quality-council
workflows/         engagement-scoping, strategy-development, implementation
memory/            engagement-decisions, risk-register, engagement-lessons
reports/           KPI + firm health reports
```

## Departments
- **02-diagnosis** — finding out what is true: the business problem, the data,
  and the external evidence. Led by [business-analyst](../02-diagnosis/business-analyst/).
- **03-strategy** — deciding what to do about it: options, the numbers behind
  them, and the market case. Led by [strategy-consultant](../03-strategy/strategy-consultant/).
- **04-implementation** — making it real: the delivery plan and the change the
  organization has to absorb. Led by [implementation-lead](../04-implementation/implementation-lead/).

## Councils
- [engagement-council](../councils/engagement-council/) — chaired by the
  engagement-director; gates analytical approach and engagement design.
- [quality-council](../councils/quality-council/) — chaired by the chief-auditor;
  gates deliverable quality, sourcing, and conformance.

## KPIs
Top-level measures, reported in [reports/](../reports/):
- **Recommendation adoption rate** — share of recommendations the client acts on.
- **Evidence integrity** — claims with a traceable source on first review.
- **On-time / on-scope delivery** — schedule and scope variance at handover.
- **Client outcome** — measured impact against the engagement's stated goal
  (Directive #1).

## Mounting
This company is **kernel-native** and is listed as `mounted (kernel-native)` in
the [kernel registry](../../kernel/registry/registry.md). The binding adapter is
[AIEOS.md](AIEOS.md). See
[../../kernel/contracts/plugin.md](../../kernel/contracts/plugin.md).
