# 00-company/ — AI Tabletop Studio Identity
Status: stable
Type: index
Owner: ceo
Extends: kernel + stdlib

The identity layer of AI Tabletop Studio: who the studio is, how it mounts on the
kernel, and how it is organized. This folder holds charter and governance only — it
builds nothing (Directive [#2](../../kernel/laws/prime-directives.md)).

The studio is **kernel-native**: built on AIEOS from the start, it inherits every
kernel law, protocol, and stdlib default and adds only stricter, tabletop-specific
local rules (Directive [#6](../../kernel/laws/prime-directives.md)).

## Contents
| File | What it holds |
|------|---------------|
| [COMPANY.md](COMPANY.md) | The studio charter — north star, inheritance, stricter local rules, structure. |
| [AIEOS.md](AIEOS.md) | The kernel-native mount adapter — executive→authority bindings, overrides by name, register mapping. |
| [org-chart.md](org-chart.md) | Reporting structure across the 5 executives and 3 departments. |

## Where to go next
- Executives — [../01-executive/](../01-executive/)
- Departments — [../02-game-design/](../02-game-design/), [../03-content/](../03-content/), [../04-playtesting/](../04-playtesting/)
- Local councils — [../councils/](../councils/)
- Local workflows — [../workflows/](../workflows/)
- Local memory — [../memory/](../memory/)
- Studio top-level — [../README.md](../README.md)

## Kernel anchors
- [Prime Directives](../../kernel/laws/prime-directives.md)
- [Engagement tiers](../../kernel/laws/engagement-tiers.md)
- [Decision authority](../../kernel/laws/decision-authority.md)
- [Company contract](../../kernel/contracts/company.md) · [Plugin contract](../../kernel/contracts/plugin.md)
