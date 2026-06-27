# AI Finance Company
Status: stable
Type: company
Owner: CEO
Extends: kernel + stdlib

## What this company is
AI Finance Company is a kernel-native investment management firm. It performs
securities analysis, portfolio risk management, and regulatory compliance inside
a regulated environment. It was **born inheriting the AIEOS kernel** — it forks
nothing ([Directive #6](../../kernel/laws/prime-directives.md)). Every law,
protocol, and standard-library default below is the source of truth; this charter
adds only **stricter** local rules, never weaker ones.

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
- **Directive #2** — the orchestrator routes, sizes, fans out, and integrates;
  it never makes an investment call itself. The `finance-orchestrator` is bound
  by this absolutely.
- **Directive #4** — work fans out across up to 15 parallel agents per the
  orchestration protocol.
- **Directive #5** — companies never talk directly to one another; all
  cross-company exchange is kernel-mediated.
- **Directive #6** — inherit, don't fork. This firm holds no private copy of any
  kernel law.
- **Directive #8** — memory is append-mostly; the
  [registers](../memory/registers/) below are written, not overwritten.

## Stricter local rules (this is all the firm adds)
Because investing is a regulated domain, the firm tightens — never loosens — the
inherited defaults:

1. **Compliance veto is absolute.** The Chief Compliance Auditor holds a
   non-overridable veto on any output. No tier, no executive, and no council
   chair may ship past a compliance block. This is stricter than the stdlib
   Chief Auditor quality veto.
2. **Methodology veto on investment process.** The Chief Investment Officer may
   veto any analysis that violates the firm's investment process, independent of
   the compliance veto.
3. **Minimum tier floor for capital-affecting work.** Any mandate that can move
   real capital runs at **T2 or higher**; it may never be sized to T0/T1.
   Risk reviews run at **T3**.
4. **No solo investment calls.** Every investment decision requires the analysis
   lead plus risk sign-off recorded in
   [investment-decisions](../memory/registers/investment-decisions.md) before it
   is actionable.
5. **Append-only audit trail.** The [compliance-log](../memory/registers/compliance-log.md)
   and [risk-register](../memory/registers/risk-register.md) are immutable once
   written; corrections are new entries that reference the prior one.

Where a local rule and a kernel law appear to disagree, the kernel governs the
mechanism and the stricter local rule governs the threshold.

## Index
- [AIEOS.md](AIEOS.md) — kernel-native mount adapter
- [org-chart.md](org-chart.md) — reporting structure
- [README.md](README.md) — folder index
