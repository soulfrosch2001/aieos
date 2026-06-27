<!-- TEMPLATE — Memory register (append-mostly). Contract: ../kernel/contracts/memory-register.md -->

# <Register Name>
Status: draft
Type: memory-register
Owner: <accountable role>
Extends: <stdlib register name> | none

**Purpose:** <the one kind of knowledge this register holds.>
**Discipline:** append-mostly — correct by adding a dated entry, never by erasing.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| <…> | <…> |

## Example entry
| 2026-06-26 | <sample row> |

## Who updates this & when
<Trigger + owner. Which workflows write here.>

## Flow
- Knowledge flows **down** from <parent register> to children.
- Decisions of consequence flow **up** to <parent register>.
See [../kernel/protocols/memory-flow.md](../kernel/protocols/memory-flow.md).
