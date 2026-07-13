# Memory
Status: stable
Type: reference
Owner: design-director
Extends: none

The studio's long-term voice. This is where design decisions, code findings, and
project lessons outlive any single task. Memory is **append-mostly**
([Directive #8](../../kernel/laws/prime-directives.md)): we add entries and dated
corrections; we never rewrite history or erase a recorded dissent.

The studio sits at the **Company** level of the four-level enterprise hierarchy.
It reads inherited guidance from the Enterprise above and promotes decisions of
consequence upward — see [architecture.md](architecture.md) and the kernel
[memory-flow protocol](../../kernel/protocols/memory-flow.md).

## Contents
| File | What it is |
|------|------------|
| [architecture.md](architecture.md) | How the studio's memory plugs into the enterprise hierarchy. |
| [registers/](registers/) | The append-mostly registers and their schemas. |

## Registers
| Register | Extends stdlib | Owner |
|----------|----------------|-------|
| [design-decisions](registers/design-decisions.md) | `architecture-decisions` | design-director |
| [code-compliance-log](registers/code-compliance-log.md) | `known-issues` | chief-auditor |
| [design-lessons](registers/design-lessons.md) | `lessons-learned` | lead-architect |

## Discipline
Append at the bottom; correct by adding a dated superseding entry, not by editing.
Each workflow in [../workflows/](../workflows/) ends by writing here — a run that
ships without a memory update is incomplete.
