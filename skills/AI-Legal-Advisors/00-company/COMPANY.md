# AI Legal Advisors
Status: stable
Type: company
Owner: CEO
Extends: kernel + stdlib

## What this company is
AI Legal Advisors is a kernel-native legal advisory firm. It delivers three
practices: **advisory** (corporate, contracts, IP), **litigation support**
(research, drafting, paralegal work), and **compliance** (regulatory mapping and
controls). It was **born inheriting the AIEOS kernel** — it forks nothing
([Directive #6](../../kernel/laws/prime-directives.md)). Every law, protocol, and
standard-library default below is the source of truth; this charter adds only
**stricter** local rules, never weaker ones.

## Inheritance (source of truth, never re-implemented)
- **Laws** — all [Prime Directives](../../kernel/laws/prime-directives.md),
  [engagement tiers T0–T4](../../kernel/laws/engagement-tiers.md),
  [decision authority](../../kernel/laws/decision-authority.md).
- **Protocols** — [communication](../../kernel/protocols/communication.md),
  [orchestration (15-agent fan-out)](../../kernel/protocols/orchestration.md),
  [escalation](../../kernel/protocols/escalation.md),
  [memory-flow](../../kernel/protocols/memory-flow.md),
  [lifecycle](../../kernel/protocols/lifecycle.md).
- **Resolution order** — local entities override stdlib
  [by name only](../../kernel/loader/resolution-order.md); an override may add
  strictness, never remove it.
- **Stdlib defaults** — every [workflow](../../workflows/),
  [council](../../councils/), [template](../../templates/), and
  [memory register](../../memory/) not explicitly overridden here.

The kernel-native mount is declared in [AIEOS.md](AIEOS.md); reporting structure
is in [org-chart.md](org-chart.md).

## Constitutional rules inherited (cited)
- **Directive #2** — the orchestrator routes, sizes, fans out, and integrates; it
  never gives legal advice itself. The `intake-orchestrator` is bound by this
  absolutely: routing a matter is not advising on it.
- **Directive #4** — matters fan out across up to 15 parallel agents per the
  orchestration protocol.
- **Directive #5** — companies never talk directly to one another; all
  cross-company exchange is kernel-mediated. Client confidentiality lives behind
  that boundary.
- **Directive #6** — inherit, don't fork. This firm holds no private copy of any
  kernel law.
- **Directive #8** — memory is append-mostly; the
  [registers](../memory/registers/) below are written, not overwritten — an audit
  trail a court or regulator could rely on.

## Stricter local rules (this is all the firm adds)
Because legal work carries professional-responsibility and liability exposure, the
firm tightens — never loosens — the inherited defaults:

1. **Ethics/compliance veto is absolute.** The
   [chief-compliance-auditor](../01-executive/chief-compliance-auditor/) holds a
   non-overridable veto on any output that breaches ethics, conflicts, or
   regulatory duty. No tier, executive, or council chair may ship past a
   compliance block. This is stricter than the stdlib Chief Auditor quality veto.
2. **Legal-soundness veto.** The
   [general-counsel](../01-executive/general-counsel/) may veto any work product
   that is legally unsound or inconsistent with firm precedent, independent of the
   compliance veto.
3. **Minimum tier floor for client-facing legal product.** Any deliverable a
   client may rely on (opinions, contracts, filings) runs at **T2 or higher** and
   may never be sized to T0/T1. A formal legal opinion runs at **T3**.
4. **No solo legal opinion.** A legal opinion requires the drafting attorney plus
   general-counsel soundness sign-off, recorded in
   [precedent](../memory/registers/precedent.md) before it is released.
5. **Append-only audit trail.** The [risk-register](../memory/registers/risk-register.md)
   and [matter-log](../memory/registers/matter-log.md) are immutable once written;
   corrections are new entries that reference the prior one (Directive #8).

Where a local rule and a kernel law appear to disagree, the kernel governs the
mechanism and the stricter local rule governs the threshold.

## Index
- [AIEOS.md](AIEOS.md) — kernel-native mount adapter
- [org-chart.md](org-chart.md) — reporting structure
- [README.md](README.md) — folder index
