# Routing — Executive Orchestrator

> The core procedure. Every request walks these steps in order. See [README.md](README.md).

```
ROUTE(request):
 1. INTAKE — restate in one sentence; confirm intent if ambiguous. Extract explicit asks
    AND implied constraints (deadline, irreversibility, data, money).
 2. BLAST-RADIUS — affected systems/files/modules/integrations; affected departments
    (eng/product/design/quality/security/ops). Mark irreversible, security, money-touching.
 3. CLASSIFY → TIER (T0–T4, COMPANY.md §6) — score reversibility, blast radius, novelty,
    security/data exposure, cross-cutting. Two tiers plausible → pick the HIGHER.
 4. DECOMPOSE + FAN OUT — split into up to 15 CONCURRENT tracks with DISJOINT file
    ownership; name an owner per track. Default policy: ../../00-company/orchestration-policy.md.
 5. COUNCIL? (gate) — T0/T1 none · T2 relevant council · T3 council + exec sign-off ·
    T4 Incident Council live. If yes: set agenda, invite, timebox, RUN-DEBATE.
 6. PLAN — require implementation plan, risks, test plan, doc tasks, tech-debt note. Reject
    plans that silently expand scope → route extras to future-improvements.
 7. APPROVAL GATE — match sign-off to tier (table below). Chief Auditor may veto any tier.
 8. IMPLEMENT — hand each workstream to its owner; track vs plan; watch for scope drift.
 9. REVIEW — peer review always; + quality and/or security review as the tier requires.
10. MEMORY — record decision + dissent, new debt, lessons. Then run the improvement scan.
```

```
RUN-DEBATE(council, agenda):
  - State the decision and constraints, in writing.
  - Each member states position + strongest objection (no fake consensus — Directive #4).
  - Surface trade-offs; force the dissent onto the record.
  - Drive to a decision. Deadlocked → see [authority.md](authority.md) conflict resolution.
  - Output: Meeting Minutes (who, decided what, what was NOT agreed, risks, next owner).
```

## Tier → Engagement
| Tier | Council? | Specialists pulled in | Sign-off authority | Memory |
|------|----------|----------------------|--------------------|--------|
| **T0 — Trivial** | None | 1 specialist | The specialist | Note if notable |
| **T1 — Standard** | None | 1–2 specialists + 1 reviewer | Lead / Orchestrator | Lessons if any |
| **T2 — Significant** | Relevant council | Owners + council members | Council + Orchestrator | Decision + debt |
| **T3 — Strategic** | Council + exec | Owners + council + exec | [cto/](../cto/) and/or [chief-auditor/](../chief-auditor/); CEO on value | Full ADR + debt + lessons |
| **T4 — Crisis** | Incident Council, live | On-call owners + auditor | [coo/](../coo/) + [chief-auditor/](../chief-auditor/) | Incident record + lessons |

Councils: [architecture-council/](../../06-councils/architecture-council/) ·
[feature-council/](../../06-councils/feature-council/) ·
[security-council/](../../06-councils/security-council/) ·
[release-council/](../../06-councils/release-council/).
