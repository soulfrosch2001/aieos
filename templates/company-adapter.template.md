<!--
TEMPLATE — Company Mount Adapter (AIEOS.md).
For an EXISTING company that predates the kernel. Place this file at the company
root as `AIEOS.md`. It is NON-DESTRUCTIVE: it binds the company's existing
structure to the kernel without renaming, moving, or deleting anything.
Contract: ../kernel/contracts/plugin.md
-->

# <Company Name> — AIEOS Mount Adapter
Status: stable
Type: plugin
Owner: <the company's CEO/orchestrator>
Extends: kernel + stdlib
Requires kernel: ^1.0.0

## What this is
This company existed before AIEOS. This adapter mounts it onto the kernel: it
declares what the company **inherits**, what it **overrides by name**, and how its
pre-kernel artifacts map onto the standard library. No existing file is changed by
mounting — reconciliation of any duplicated governance happens later, deliberately
([Directive #7](<root>kernel/laws/prime-directives.md)).

## Inherited from AIEOS (source of truth)
- **Laws** — all [Prime Directives](<root>kernel/laws/prime-directives.md),
  [engagement tiers](<root>kernel/laws/engagement-tiers.md),
  [decision authority](<root>kernel/laws/decision-authority.md).
- **Protocols** — communication, orchestration (15-agent), escalation, memory-flow, lifecycle.
- **Stdlib defaults** — every [workflow](<root>workflows/), [council](<root>councils/),
  [template](<root>templates/), and [memory register](<root>memory/) it does not override.

## Legacy governance (superseded, retained for history)
These local files duplicate kernel law and are now **superseded by the kernel**.
They are kept, not deleted; the kernel is authoritative where they disagree.
| Local file | Superseded by |
|------------|---------------|
| `00-company/prime-directives.md` | [kernel laws](<root>kernel/laws/prime-directives.md) |
| `00-company/engagement-tiers.md` | [kernel tiers](<root>kernel/laws/engagement-tiers.md) |
| <…> | <…> |

## Executive mapping → decision-authority levels
| Local role | Kernel level |
|------------|--------------|
| <ceo> | CEO |
| <cto-equivalent> | CTO (+ technical veto) |
| <coo-equivalent> | COO |
| <auditor> | Chief Auditor (quality veto) |
| <orchestrator> | Supreme Orchestrator (routing) |

## Local overrides (by name)
Local entities that intentionally replace a stdlib default of the same name.
| Local entity | Overrides stdlib | Why |
|--------------|------------------|-----|
| <name> | <stdlib name> | <reason> |

## Memory register mapping
| Local register | Stdlib schema | Relationship |
|----------------|---------------|--------------|
| <local>.md | <stdlib>.md | inherits / extends / company-only |

## Conformance
Mounted when: this adapter is present, executives map to decision-authority, the
register mapping is complete, and the company is listed in
[kernel/registry/registry.md](<root>kernel/registry/registry.md) as `mounted`.
