# AI Legal Advisors
Status: stable
Type: company
Owner: CEO
Extends: kernel + stdlib

## What this is
**AI Legal Advisors** is a kernel-native company in AIEOS — a legal advisory firm
covering **advisory** (corporate, contracts, IP), **litigation support** (research,
drafting, paralegal work), and **compliance** (regulatory mapping and controls). It
was **born inheriting the AIEOS kernel** and forks nothing
([Directive #6](../kernel/laws/prime-directives.md)): every law, protocol, and
standard-library default is the source of truth, and the firm adds only **stricter**
local rules — an absolute ethics/compliance veto, a legal-soundness veto, and a T2
floor on every client-facing legal product.

## Repo map
- [00-company/](00-company/) — governance core.
  - [00-company/COMPANY.md](00-company/COMPANY.md) — charter: inheritance and stricter local rules.
  - [00-company/AIEOS.md](00-company/AIEOS.md) — kernel-native mount adapter.
- [01-executive/](01-executive/) — the five executives (managing-partner,
  general-counsel, operations-partner, chief-compliance-auditor, intake-orchestrator).
- **Departments**
  - [02-advisory/](02-advisory/) — corporate-counsel (lead), contract-attorney, ip-attorney.
  - [03-litigation/](03-litigation/) — litigator (lead), legal-researcher, paralegal.
  - [04-compliance/](04-compliance/) — compliance-counsel (lead), regulatory-analyst.
- [councils/](councils/) — [matter-review-council](councils/matter-review-council/)
  (chair general-counsel) and [risk-council](councils/risk-council/)
  (chair chief-compliance-auditor).
- [workflows/](workflows/) — [matter-intake](workflows/matter-intake.md) (T2),
  [contract-review](workflows/contract-review.md) (T2),
  [legal-opinion](workflows/legal-opinion.md) (T3).
- [memory/](memory/) — append-mostly registers: precedent, risk-register, matter-log.
- [reports/](reports/) — conformance and [health report](reports/health-report.md).

## Inherited from the kernel (never re-implemented)
- **Laws** — [Prime Directives](../kernel/laws/prime-directives.md),
  [engagement tiers T0–T4](../kernel/laws/engagement-tiers.md),
  [decision authority](../kernel/laws/decision-authority.md).
- **Protocols** — [communication](../kernel/protocols/communication.md),
  [orchestration](../kernel/protocols/orchestration.md),
  [escalation](../kernel/protocols/escalation.md),
  [memory-flow](../kernel/protocols/memory-flow.md),
  [lifecycle](../kernel/protocols/lifecycle.md).
- **Resolution order** — local entities override stdlib
  [by name only](../kernel/loader/resolution-order.md).
- **Templates** — entity shapes from [../templates/](../templates/).

## Start here
Read [00-company/COMPANY.md](00-company/COMPANY.md) for the charter, then
[00-company/AIEOS.md](00-company/AIEOS.md) for how the firm mounts on the kernel.
