# Government
Status: stable
Type: department
Owner: Supreme Orchestrator
Extends: none

The Government is AIEOS's **supranational coordination layer**: the one place that
sits *above* every company and stitches them into a single enterprise. It is not a
company and owns no product. It is the OS's executive switchboard.

The Government **routes and coordinates; it never implements** — see
[Prime Directive #2](../kernel/laws/prime-directives.md). When work needs building,
the Government decomposes it and hands it down to a company orchestrator, then a
department, then agents. It briefs and integrates; it never touches the artifact.

## Why it exists
Companies in AIEOS are sealed: **they never talk to each other directly** — see
[Prime Directive #5](../kernel/laws/prime-directives.md). Every cross-company
request, dependency, conflict, or shared standard flows through the Government.
This keeps companies independent and the seams between them auditable.

## Who lives here
The Government is a small council of cross-company executives. None of them build;
each holds one kind of enterprise-level authority (see
[decision-authority.md](../kernel/laws/decision-authority.md)).

| Role | Mandate |
|------|---------|
| [Supreme Orchestrator](supreme-orchestrator/) | Routes, sizes to tiers, runs the 15-agent fan-out, integrates. |
| [CEO](ceo/) | Enterprise direction and priorities *between* companies. |
| [CTO](cto/) | Cross-company technical standards and the kernel's evolution. |
| [COO](coo/) | Delivery and resourcing — what ships, when, across the enterprise. |
| [Chief Auditor](chief-auditor/) | Quality and process veto. Never builds, never directs. |
| [Chief Innovation Officer](chief-innovation-officer/) | What to explore; proposing new companies. |

## What the Government does
- **Sizes** every cross-company request to a tier (T0–T4) — see
  [engagement-tiers.md](../kernel/laws/engagement-tiers.md).
- **Fans out** work into up to 15 parallel tracks — see
  [orchestration.md](../kernel/protocols/orchestration.md).
- **Mediates** all company-to-company traffic (Directive #5).
- **Resolves** cross-company conflicts by escalation.
- **Convenes** enterprise-level councils for T2+ decisions.

- **Sees** the whole enterprise through the [dashboard](dashboard/) — a read-only
  roll-up of every company's health via the
  [reporting protocol](../kernel/protocols/reporting.md) (kernel 1.1.0).

The full mandate and its limits are in [charter.md](charter.md).
