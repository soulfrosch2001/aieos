# Decision Authority
Status: stable
Type: reference
Owner: executive-orchestrator
Extends: ../../kernel/laws/decision-authority.md

This company inherits the kernel's authoritative
[Decision Authority](../../kernel/laws/decision-authority.md) model — decides-alone /
decides-with-a-peer / recommends-only, and a Chief Auditor veto that only a human
maintainer overrides. That model **supersedes** the previously-duplicated local text.

## Local additions (stricter only)
This company binds its own executives onto the kernel levels (it may add strictness, never loosen):
- **CEO** owns *whether* something is worth doing — [../01-executive/ceo/](../01-executive/ceo/).
- **CTO** owns *how* it is built; final say on architecture and technical risk — [../01-executive/cto/](../01-executive/cto/).
- **COO** owns *that it ships* — delivery, process, releases — [../01-executive/coo/](../01-executive/coo/).
- **Chief Auditor** — independent quality/security veto — [../01-executive/chief-auditor/](../01-executive/chief-auditor/).
- **Councils** decide domain calls by debate; **specialists** own decisions inside their craft within an approved plan.
- Craft deadlock → council chair; cross-department deadlock → the
  [Orchestrator](../01-executive/executive-orchestrator/), then CTO (technical) or CEO (value).
