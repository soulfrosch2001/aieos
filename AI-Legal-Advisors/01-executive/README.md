# Executive Office
Status: stable
Type: department
Owner: managing-partner
Extends: none

## Mission
The executive office of AI Legal Advisors sets practice direction, guarantees legal soundness, runs matter delivery, and enforces ethics/compliance. Each executive binds to a kernel decision-authority level so that authority is explicit and veto is rare but absolute. See [kernel/laws/decision-authority.md](../../kernel/laws/decision-authority.md).

## Executives — kernel binding
| Executive | Kernel level | Mandate | Folder |
|-----------|-------------|---------|--------|
| Managing Partner | CEO | Sets practice direction; decides which matters the firm takes; decides direction alone. | [./managing-partner/](./managing-partner/) |
| General Counsel | CTO (+ legal-soundness veto) | Owns legal soundness and consistency across matters; holds a veto on legally unsound work. | [./general-counsel/](./general-counsel/) |
| Operations Partner | COO | Owns matter delivery, staffing, and deadlines; decides sequencing alone. | [./operations-partner/](./operations-partner/) |
| Chief Compliance Auditor | Chief Auditor | Absolute ethics/compliance veto; never advises, never directs; runs conformance. | [./chief-compliance-auditor/](./chief-compliance-auditor/) |
| Intake Orchestrator | Supreme Orchestrator | Routes matters, sizes engagement tier, fans out, integrates; never gives legal advice (Directive #2). | [./intake-orchestrator/](./intake-orchestrator/) |

## Authority shape
- Direction and matter selection resolve at the Managing Partner (CEO).
- Legal coherence is the General Counsel's domain; its veto stops legally unsound work.
- The Chief Compliance Auditor's veto is absolute — only a human maintainer overrides it.
- Deadlocks escalate one level up per [kernel/protocols/escalation.md](../../kernel/protocols/escalation.md).

## Index
- [Managing Partner](./managing-partner/)
- [General Counsel](./general-counsel/)
- [Operations Partner](./operations-partner/)
- [Chief Compliance Auditor](./chief-compliance-auditor/)
- [Intake Orchestrator](./intake-orchestrator/)
