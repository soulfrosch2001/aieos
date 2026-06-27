# Kernel Laws

Status: stable
Type: protocol
Owner: CTO (Government)
Extends: none

The laws are the rules no entity may break. They are inherited by every workflow,
council, agent, department, and company in AIEOS. A company may add *stricter*
local rules; it may never weaken a law (Directive #6 — see
[prime-directives.md](prime-directives.md)). Only a human maintainer overrides a
law.

## The laws in this folder

| File | What it governs |
|------|-----------------|
| [prime-directives.md](prime-directives.md) | The 10 Prime Directives — the supreme rules that override everything. Cited by number, e.g. "Directive #4". |
| [engagement-tiers.md](engagement-tiers.md) | T0–T4 — how every request is sized, and how that sizing drives ceremony, fan-out, and sign-off. |
| [decision-authority.md](decision-authority.md) | Who decides what, the three authority levels, and the absolute-but-rare veto. |
| [operating-doctrine.md](operating-doctrine.md) | The eight habits of assertive, high-agency support — how the system *shows up* when it works (kernel 1.2.0). |

## Reading order

Read [prime-directives.md](prime-directives.md) first — the other two laws are
mechanisms that implement directives (tiers implement #3 and #4; authority
implements #2 and #9). Tiers and authority cross-reference each other: a tier
names a sign-off, and authority defines what that sign-off means.

## Where the laws are enforced

Laws are not self-enforcing prose. The [loader](../loader/README.md) refuses to
mount an entity that violates a contract, and a Chief Auditor veto (see
[decision-authority.md](decision-authority.md)) stops work that violates process.
