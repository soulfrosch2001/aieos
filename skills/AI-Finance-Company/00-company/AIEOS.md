# AI Finance Company — AIEOS Mount Adapter
Status: stable
Type: company
Owner: finance-orchestrator
Extends: kernel + stdlib
Requires kernel: ^1.0.0

## What this is
AI Finance Company is **kernel-native**: it was born on AIEOS and forks nothing
([Directive #6](../../kernel/laws/prime-directives.md)). This adapter is not a
migration of legacy governance — there is none. It declares what the firm
**inherits**, the executive-to-authority mapping, and the local entities that
**override stdlib by name** while adding only strictness
([resolution order](../../kernel/loader/resolution-order.md)).

## Inherited from AIEOS (source of truth)
- **Laws** — all [Prime Directives](../../kernel/laws/prime-directives.md),
  [engagement tiers](../../kernel/laws/engagement-tiers.md),
  [decision authority](../../kernel/laws/decision-authority.md).
- **Protocols** — [communication](../../kernel/protocols/communication.md),
  [orchestration (15-agent)](../../kernel/protocols/orchestration.md),
  [escalation](../../kernel/protocols/escalation.md),
  [memory-flow](../../kernel/protocols/memory-flow.md),
  [lifecycle](../../kernel/protocols/lifecycle.md).
- **Stdlib defaults** — every [workflow](../../workflows/),
  [council](../../councils/), [template](../../templates/), and
  [memory register](../../memory/) not overridden below.

## Executive mapping → decision-authority levels
| Local role | Kernel level |
|------------|--------------|
| [ceo](../01-executive/ceo/) | CEO |
| [chief-investment-officer](../01-executive/chief-investment-officer/) | CTO (+ methodology veto) |
| [chief-operating-officer](../01-executive/chief-operating-officer/) | COO |
| [chief-compliance-auditor](../01-executive/chief-compliance-auditor/) | Chief Auditor (quality/compliance veto) |
| [finance-orchestrator](../01-executive/finance-orchestrator/) | Supreme Orchestrator (routing) |

## Local overrides (by name)
Local entities that intentionally extend a stdlib default of the same lineage,
adding strictness only.

### Councils
| Local council | Extends stdlib | Why |
|---------------|----------------|-----|
| [investment-council](../councils/investment-council/) | [feature-council](../../councils/feature-council/) | Decides whether an investment thesis ships; chaired by the chief-investment-officer with methodology veto. |
| [risk-council](../councils/risk-council/) | [security-council](../../councils/security-council/) | Reviews portfolio and market risk as a hard gate; chaired by the risk-manager. |

### Workflows
| Local workflow | Tier | Extends stdlib | Why |
|----------------|------|----------------|-----|
| [investment-thesis](../workflows/investment-thesis.md) | T2 | [research](../../workflows/research.md) | Produces a defensible, risk-signed investment thesis. |
| [risk-review](../workflows/risk-review.md) | T3 | [security-review](../../workflows/security-review.md) | Hard risk gate before capital moves. |
| [portfolio-rebalance](../workflows/portfolio-rebalance.md) | T2 | [planning](../../workflows/planning.md) | Sequenced, compliance-checked rebalancing plan. |

## Memory register mapping
| Local register | Stdlib schema | Owner | Relationship |
|----------------|---------------|-------|--------------|
| [investment-decisions](../memory/registers/investment-decisions.md) | [architecture-decisions](../../memory/registers/architecture-decisions.md) | chief-investment-officer | extends |
| [risk-register](../memory/registers/risk-register.md) | [known-issues](../../memory/registers/known-issues.md) | risk-manager | extends |
| [compliance-log](../memory/registers/compliance-log.md) | [lessons-learned](../../memory/registers/lessons-learned.md) | chief-compliance-auditor | extends |

## Conformance
Mounted **kernel-native** when: this adapter is present, the five executives map
to decision-authority levels, every local override names the stdlib entity it
extends, the register mapping is complete, and the firm is listed in
[kernel/registry/registry.md](../../kernel/registry/registry.md) as `mounted`.
