# 🔐 Security Council — Output

## Deliverables
1. **Security Verdict** — the outcome (**CLEARED** / **CLEARED-WITH-CONDITIONS** / **BLOCKED**),
   the threat model behind it, the named owner of every mitigation, and recorded dissent.
2. **Meeting Minutes** — per the format in
   [../communication-protocol.md](../communication-protocol.md), appended to
   [../../10-memory/meeting-history.md](../../10-memory/meeting-history.md). A BLOCK and any
   **human risk-acceptance** that lifts it are logged here verbatim.
3. **Memory updates:**
   - **Always:** [../../10-memory/meeting-history.md](../../10-memory/meeting-history.md).
   - **Known issues / exploits found:** [../../10-memory/known-bugs.md](../../10-memory/known-bugs.md).
   - **If debt is taken:** [../../10-memory/technical-debt.md](../../10-memory/technical-debt.md).
   - **If a lesson emerges:** [../../10-memory/lessons-learned.md](../../10-memory/lessons-learned.md).

Memory is **append-mostly** — add corrections, never rewrite history (Prime Directive #5).

## Copy-Paste Template — Security Verdict
```markdown
# Security Council — Security Verdict

Council:   security-council       Date: YYYY-MM-DD
Tier:      T2 / T3 / T4           Chair: chief-auditor
Attendees: <roles present>
Topic:     <feature / build / release in one line>
Outcome:   CLEARED | CLEARED-WITH-CONDITIONS | BLOCKED

## Assets at Risk
<accounts · personal data · saves · currency/entitlements · server authority · build secrets · cert>

## Threat Model
| Asset | Threat (cheat/leak/exploit/corruption/policy) | Likelihood | Impact | Mitigation | Owner |
|-------|-----------------------------------------------|-----------|--------|------------|-------|

## Threat & Compliance Checklist
- [ ] Anti-cheat — server-authoritative; client treated as hostile
- [ ] Player data — lawful basis, minimization, consent, deletion path (GDPR-style)
- [ ] Save integrity — tamper/forgery/corruption resistance verified
- [ ] Monetization integrity — entitlements/currency cannot be forged
- [ ] Console certification — platform requirements met (Sony / MS / Nintendo)
- [ ] Store policy & age rating — compliant
- [ ] Build provenance — secrets handled, artifacts signed
- [ ] Breach/incident path — detection & disclosure plan exists

## Consensus
<what everyone genuinely agreed on>

## Remaining Concerns (attributed — never empty if dissent exists)
- <name> — <concern> [re-review trigger: <e.g. pre-cert pass>]

## Conditions (required for CLEARED-WITH-CONDITIONS)
- <mitigation> — owner: <name> — verified by: <date/gate>

## Decision
<the call>. If BLOCKED: BLOCK IS FINAL pending recorded human risk-acceptance.
Human risk-acceptance (only override): <name / decision / date — or "none">

## Approval Gate
- [ ] Council + Orchestrator (T2)
- [ ] Technical Director sign-off (T3 risk)
- [ ] Chief Auditor clearance → feeds release-council Go/No-Go
- [ ] No unmitigated high-impact threat remains

## Owners & Next Steps
- Mitigation owners: <name · control · by when>
- Re-review gate: <pre-cert / first live week / etc.>
- Workflow: <09-workflows/ relevant entry>
```
