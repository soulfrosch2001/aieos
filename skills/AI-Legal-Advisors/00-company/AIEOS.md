# AI Legal Advisors — AIEOS Mount Adapter
Status: stable
Type: company
Owner: intake-orchestrator
Extends: kernel + stdlib
Requires kernel: ^1.0.0

## What this is
AI Legal Advisors is **kernel-native**: it was born on AIEOS and forks nothing
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
| [managing-partner](../01-executive/managing-partner/) | CEO |
| [general-counsel](../01-executive/general-counsel/) | CTO (+ legal-soundness veto) |
| [operations-partner](../01-executive/operations-partner/) | COO |
| [chief-compliance-auditor](../01-executive/chief-compliance-auditor/) | Chief Auditor (ethics/compliance veto, absolute) |
| [intake-orchestrator](../01-executive/intake-orchestrator/) | Supreme Orchestrator (routing) |

## Local overrides (by name)
Local entities that intentionally extend a stdlib default of the same lineage,
adding strictness only.

### Councils
| Local council | Extends stdlib | Why |
|---------------|----------------|-----|
| [matter-review-council](../councils/matter-review-council/) | [feature-council](../../councils/feature-council/) | Decides whether a matter strategy or work product ships; chaired by the general-counsel with the legal-soundness veto. |
| [risk-council](../councils/risk-council/) | [security-council](../../councils/security-council/) | Reviews ethics, conflicts, and regulatory risk as a hard gate; chaired by the chief-compliance-auditor. |

### Workflows
| Local workflow | Tier | Extends stdlib | Why |
|----------------|------|----------------|-----|
| [matter-intake](../workflows/matter-intake.md) | T2 | [planning](../../workflows/planning.md) | Conflict-checks, sizes, and routes an incoming matter. |
| [contract-review](../workflows/contract-review.md) | T2 | [security-review](../../workflows/security-review.md) | Hard risk gate over contract terms before sign-off. |
| [legal-opinion](../workflows/legal-opinion.md) | T3 | [research](../../workflows/research.md) | Produces a defensible, soundness-signed legal opinion. |

## Memory register mapping
| Local register | Stdlib schema | Owner | Relationship |
|----------------|---------------|-------|--------------|
| [precedent](../memory/registers/precedent.md) | [architecture-decisions](../../memory/registers/architecture-decisions.md) | general-counsel | extends |
| [risk-register](../memory/registers/risk-register.md) | [known-issues](../../memory/registers/known-issues.md) | chief-compliance-auditor | extends |
| [matter-log](../memory/registers/matter-log.md) | [lessons-learned](../../memory/registers/lessons-learned.md) | operations-partner | extends |

## Conformance
Mounted **kernel-native** when: this adapter is present, the five executives map
to decision-authority levels, every local override names the stdlib entity it
extends, the register mapping is complete, and the firm is listed in
[kernel/registry/registry.md](../../kernel/registry/registry.md) as `mounted`.
