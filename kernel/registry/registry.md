# Registry Manifest

Status: stable
Type: protocol
Owner: CTO (Government)
Extends: none

The list of installed companies and plugins in this AIEOS instance. One row per
entity. Appended to, never rewritten (Directive #8 — see
[../laws/prime-directives.md](../laws/prime-directives.md)). See
[README.md](README.md) for what each column means and
[../loader/README.md](../loader/README.md) for how these entities are mounted.

## Installed companies

| Company | Domain | Status | Notes |
|---------|--------|--------|-------|
| **ai-software-company** | Software product company | mounted (adapter: ai-software-company/AIEOS.md) | Pre-existing estate. Mounted non-destructively via adapter; legacy governance superseded but retained. |
| **AI-Game-Studio** | Game studio | mounted (adapter: AI-Game-Studio/AIEOS.md) | Pre-existing estate. Mounted non-destructively via adapter; legacy governance superseded but retained. |
| **AI-Tabletop-Studio** | Tabletop game studio | mounted (kernel-native) | Built fresh on the kernel and stdlib. No legacy estate to adapt. |
| **AI-Marketing-Agency** | Marketing agency | mounted (kernel-native) | Phase 3. Inherits stdlib; overrides campaign/brand councils & workflows by name. |
| **AI-Publishing-House** | Book publishing | mounted (kernel-native) | Phase 3. Acquisitions → editorial → production pipeline on the kernel. |
| **AI-Finance-Company** | Investment management | mounted (kernel-native) | Phase 3. Regulated domain; strong compliance veto via Chief Auditor. |
| **AI-Research-Lab** | Scientific research | mounted (kernel-native) | Phase 3. Peer-review and ethics councils extend the stdlib gates. |
| **AI-RPG-Studio** | Tabletop RPG design | mounted (kernel-native) | Worldbuilding, systems, and narrative campaigns. |
| **AI-Architecture-Studio** | Building architecture | mounted (kernel-native) | Design, technical engineering, delivery; code-compliance council. |
| **AI-Legal-Advisors** | Legal advisory | mounted (kernel-native) | Advisory, litigation support, compliance; absolute compliance veto. |
| **AI-Education-Academy** | Education / course design | mounted (kernel-native) | Curriculum, content, delivery; assessment council. |
| **AI-Film-Studio** | Film production | mounted (kernel-native) | Decision 0001. Development → production → post; greenlight council. |
| **AI-Healthcare-Clinic** | Clinic (organizational) | mounted (kernel-native) | Decision 0001. Intake/care/compliance — org structure only, no medical advice. |
| **AI-Music-Label** | Music label | mounted (kernel-native) | Decision 0001. A&R, production, marketing; signing council. |
| **AI-Consulting-Firm** | Management consulting | mounted (kernel-native) | Decision 0001. Diagnosis, strategy, implementation. |

## Installed plugins

| Plugin | Provides | Status | Notes |
|--------|----------|--------|-------|
| _(none yet)_ | — | — | — |

## Migration note

The three companies above existed before the kernel, or — in the case of
**AI-Tabletop-Studio** — were built fresh on it. The two legacy estates
(`ai-software-company`, `AI-Game-Studio`) are now `mounted` **non-destructively**
through an `AIEOS.md` adapter at each company root: their original files are
**preserved exactly as found**, nothing renamed or deleted, and any local
governance that duplicates kernel law is **superseded but retained** (see
[../../shared/conventions.md](../../shared/conventions.md) and
[../../docs/MIGRATION.md](../../docs/MIGRATION.md)). **AI-Tabletop-Studio** is
`kernel-native`: it has no legacy estate and inherits the stdlib directly, with no
adapter. Inheritance from the stdlib happens by name, per
[../loader/resolution-order.md](../loader/resolution-order.md).
