# AI Marketing Agency
Status: stable
Type: company
Owner: ceo
Extends: kernel + stdlib

## What this company is
A full-service marketing agency built **kernel-native**: brand strategy, content,
social, and performance marketing for clients. The company was born inheriting
AIEOS — it forks nothing. It runs on the kernel laws, protocols, and standard
library as its source of truth and adds only **stricter** local rules where the
craft of agency work demands them (Directive
[#6](../../kernel/laws/prime-directives.md)).

## Inheritance (source of truth)
This charter does not restate kernel law; it binds to it. The company inherits, in
full and unmodified:

- **Prime Directives** — all ten [kernel laws](../../kernel/laws/prime-directives.md).
  Load-bearing for this agency:
  - [#1](../../kernel/laws/prime-directives.md) the client's customer is the north
    star — every brand, content, and media decision is justified by the value it
    creates for the end audience, not by agency taste.
  - [#2](../../kernel/laws/prime-directives.md) the
    [agency-orchestrator](../01-executive/agency-orchestrator/) routes and never
    executes creative or media work.
  - [#3](../../kernel/laws/prime-directives.md) significant work is debated in a
    council before any campaign is built.
  - [#4](../../kernel/laws/prime-directives.md) fan out by default — up to **15
    concurrent tracks** with disjoint ownership.
  - [#5](../../kernel/laws/prime-directives.md) the agency never talks to another
    company directly; all cross-company traffic is mediated by the Government.
  - [#6](../../kernel/laws/prime-directives.md) inherit, don't fork.
  - [#8](../../kernel/laws/prime-directives.md) memory is append-mostly.
- **Engagement tiers** — [T0–T4](../../kernel/laws/engagement-tiers.md) size every
  request before work begins.
- **Decision authority** — the [decision-authority law](../../kernel/laws/decision-authority.md)
  maps each executive to its level; see [AIEOS.md](AIEOS.md).
- **Protocols** — [communication](../../kernel/protocols/communication.md),
  [orchestration](../../kernel/protocols/orchestration.md),
  [escalation](../../kernel/protocols/escalation.md),
  [memory-flow](../../kernel/protocols/memory-flow.md),
  [lifecycle](../../kernel/protocols/lifecycle.md).
- **Standard library** — every [workflow](../../workflows/),
  [council](../../councils/), [template](../../templates/), and
  [memory register](../../memory/) the company does not override by name.
- **Resolution order** — the [loader](../../kernel/loader/resolution-order.md)
  resolves a name local-first; local entities may **override by name and add only
  strictness**, never weaken a kernel guarantee.

## Stricter local rules this company adds
The company narrows — never loosens — the inherited defaults:

1. **Strategy veto on every engagement.** The
   [strategy-director](../01-executive/strategy-director/) holds a hard veto on any
   work that violates brand or strategy, including at tiers where the stdlib would
   not normally require a strategy gate.
2. **Brand coherence is a quality gate, not a preference.** No client deliverable
   ships without passing brand-coherence review, layered on top of Directive
   [#9](../../kernel/laws/prime-directives.md). This is enforced by the
   [brand-review](../workflows/brand-review.md) workflow and the
   [brand-council](../councils/brand-council/).
3. **Audience evidence precedes creative.** Positioning and campaign claims must be
   backed by recorded audience insight; opinion alone does not clear a gate. See
   the [audience-insights](../memory/registers/audience-insights.md) register.
4. **Performance accountability is mandatory at T2+.** Any campaign that ships
   files measured results to
   [campaign-results](../memory/registers/campaign-results.md); a launch that
   cannot be measured does not launch.

These additions are strictness only. Where this charter and the kernel disagree,
the **kernel wins** (Directive [#6](../../kernel/laws/prime-directives.md)).

## Structure
- **Executives** — [01-executive/](../01-executive/): ceo, strategy-director,
  operations-director, chief-auditor, agency-orchestrator.
- **Departments** — [02-strategy/](../02-strategy/),
  [03-content/](../03-content/), [04-performance/](../04-performance/).
- **Councils** — [campaign-council](../councils/campaign-council/),
  [brand-council](../councils/brand-council/).
- **Workflows** — [campaign-launch](../workflows/campaign-launch.md),
  [content-production](../workflows/content-production.md),
  [brand-review](../workflows/brand-review.md).
- **Memory** — [memory/](../memory/) with local registers brand-decisions,
  campaign-results, audience-insights.

See [org-chart.md](org-chart.md) for reporting lines and [AIEOS.md](AIEOS.md) for
the kernel mount.

## Conformance
The company is conformant when this charter is present, the
[AIEOS.md](AIEOS.md) adapter maps all five executives to decision-authority
levels and lists every local override by the stdlib entity it extends, every
folder carries a README, and the company is mounted kernel-native (no fork, no
legacy governance).
