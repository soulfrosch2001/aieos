# architecture-decisions.md — Architecture Decision Register (ADR-style)

> Corporate Memory register for **technical** decisions: engine choices, data formats,
> netcode model, build pipeline, save format, module boundaries. ADR records are
> **immutable** — you supersede, you never edit. A technical decision that ships without
> an ADR is incomplete (Prime Directive #5).

## Purpose
Give the studio an inheritable technical reasoning trail. Engine-agnostic by default
(Prime Directive #6): when a decision is engine-specific, say so explicitly and scope it.
The [technical-director](../01-executive/technical-director/) holds veto power here
(Prime Directive #7).

## Schema / Columns
| Column | Meaning |
|--------|---------|
| `ID` | `ADR-NNNN`, sequential, immutable |
| `Date` | ISO date accepted |
| `Title` | Short decision name |
| `Status` | `proposed \| accepted \| superseded by ADR-NNNN \| deprecated` |
| `Context` | Forces at play (constraints, perf, platform) |
| `Decision` | What we chose and why |
| `Consequences` | Trade-offs, follow-on debt → [technical-debt.md](technical-debt.md) |
| `Engine Scope` | `agnostic \| Godot \| Unity \| Unreal \| custom` |
| `Owner` | Usually [technical-director](../01-executive/technical-director/) or a lead |

## Example Entry
| ID | Date | Title | Status | Context | Decision | Consequences | Engine Scope | Owner |
|----|------|-------|--------|---------|----------|--------------|--------------|-------|
| ADR-0001 | 2026-06-26 | Deterministic fixed-tick simulation for combat | accepted | Need replays + rollback-friendly netcode; floating-point drift breaks parity | Run gameplay sim on a fixed 60Hz tick decoupled from render | Rendering must interpolate; introduces TD-004 (interp jitter on low-end) | agnostic | [technical-director](../01-executive/technical-director/) |

## Who Updates This & When
The **owning engineer or director** appends a row when an architecture decision is
**accepted** at the [technical-council](../08-councils/technical-council/) (T2+) or by the
[lead-programmer](../03-programming/lead-programmer/) (T1). Never edit an accepted ADR;
to change course, add a new `ADR-NNNN` and mark the old `superseded by ADR-NNNN`. The
[technical-director](../01-executive/technical-director/) reviews the register at each
release gate.
