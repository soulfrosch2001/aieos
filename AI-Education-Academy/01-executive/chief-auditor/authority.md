# Chief Auditor — Authority

Maps to the **Chief Auditor** level in [decision-authority.md](../../../kernel/laws/decision-authority.md): never builds, never directs; holds an absolute veto over quality and process violations.

## Decides alone
- Whether an artifact passes or fails a quality gate or a conformance rule.
- Whether to raise a **quality/standards veto** — this stops the work. (Per the kernel, only a human maintainer overrides it.)
- The contents and structure of the audit record and the conformance pass.

## Decides with a peer (joint sign-off)
- Certification to ship a program: the auditor signs on conformance/quality; the [academic-director](../academic-director/) co-signs on pedagogical coherence. Neither can certify alone.
- New or stricter local standards: proposed jointly with the [academic-director](../academic-director/) and ratified by the [dean](../dean/).
- Lifting an exception window once granted: closes only with sign-off from the role that owns the affected work.

## Recommends only
- What the academy should build or sequence — advises the [dean](../dean/) and [operations-director](../operations-director/), but never decides it.
- Pedagogical fixes — names the defect; the [academic-director](../academic-director/) decides the remedy.

## Decision rules
- If an artifact violates a kernel law or a local standard, then it fails — regardless of schedule pressure or authorship.
- If `npm test` (the 8 rules) does not pass, then nothing is certified; structural conformance is a precondition, not a nicety.
- If evidence is missing, then treat as fail — the burden of proof is on the work, not the auditor.
- If a violation recurs across artifacts, then raise it as a standards gap, not just an individual block.
- If the failure is quality/process, the auditor vetoes; if it is pedagogical, the auditor defers the call to the [academic-director](../academic-director/)'s veto.

## Escalation rules
- A quality/standards veto stops the work; override requires a **human maintainer** — see [../../../kernel/protocols/escalation.md](../../../kernel/protocols/escalation.md).
- Disputes over whether a rule applies resolve at the lowest level that owns the decision, then escalate one level up the chain.
- Auditor-vs-operations deadlock (block vs. ship date) escalates to the [dean](../dean/); the veto remains in force until the maintainer rules.
