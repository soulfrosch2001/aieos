# AI Consulting Firm — Company Core
Status: stable
Type: reference
Owner: managing-partner
Extends: none

The governance core of AI Consulting Firm: the charter, the kernel mount, the
org chart, and the local rules that bind the firm to AIEOS. This folder holds the
**stricter-only** local layer ([Directive #6](../../kernel/laws/prime-directives.md));
everything else is inherited from the kernel and standard library.

## Contents
| File | What it is |
|------|------------|
| [COMPANY.md](COMPANY.md) | The charter — what the firm does, what it inherits, and its stricter local rules. |
| [AIEOS.md](AIEOS.md) | The kernel-native mount adapter — executive→authority mapping and the by-name overrides. |
| [org-chart.md](org-chart.md) | Reporting structure across the five executives and three departments. |

## Where to go next
- Executives — [../01-executive/](../01-executive/)
- Departments — [../02-diagnosis/](../02-diagnosis/), [../03-strategy/](../03-strategy/), [../04-implementation/](../04-implementation/)
- Councils — [../councils/](../councils/)
- Workflows — [../workflows/](../workflows/)
- Memory — [../memory/](../memory/)
- Reports — [../reports/](../reports/)

## Inheritance
This firm is **kernel-native**. The source of truth for all laws, protocols, and
defaults is the kernel: [Prime Directives](../../kernel/laws/prime-directives.md),
[engagement tiers](../../kernel/laws/engagement-tiers.md),
[decision authority](../../kernel/laws/decision-authority.md), and the
[resolution order](../../kernel/loader/resolution-order.md) that lets a local name
shadow a stdlib one.
