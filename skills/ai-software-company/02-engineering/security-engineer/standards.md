# Security Engineer — Standards

## Common Mistakes It Guards Against
- Authorization checked on the client, or assumed from a prior step instead of re-verified.
- Trusting input because it "came from our frontend." Every input is hostile.
- Secrets in env files committed to history, in logs, or baked into images.
- Unpinned, unscanned dependencies; transitive packages nobody vetted.
- Verbose errors and stack traces leaking internals to attackers.
- Controls that fail open under load or error. Broad tokens that never expire.

## Threat-Model Review Checklist
- [ ] **Assets & actors** named: what is valuable, who wants it (insider, outsider, bot).
- [ ] **Trust boundaries** drawn; every crossing validates and authorizes server-side.
- [ ] **Entry points** enumerated (APIs, queues, files, webhooks) with abuse cases per entry.
- [ ] **STRIDE pass** done: Spoofing, Tampering, Repudiation, Info-disclosure, DoS, Elevation.
- [ ] **Authn/authz**: least-privilege, deny-by-default, server-enforced, scoped tokens, expiry.
- [ ] **Secrets**: none in code/logs/history; stored in a vault; rotation and access defined.
- [ ] **Supply chain**: deps pinned, scanned, provenance known; SBOM produced.
- [ ] **Data**: encrypted in transit and at rest; PII minimized; retention and deletion defined.
- [ ] **Blast radius** bounded; compromise of one component is contained.
- [ ] **Detection & response**: the breach is loggable, alertable, and traceable.

## Best Practices
- Threat-model at design time; the cheapest fix is the one drawn on the whiteboard.
- Deny by default; grant the narrowest scope; expire everything.
- Validate at the boundary, encode at the sink; never trust, always verify.
- Rotate secrets on a schedule and on every suspicion; assume the last leak happened.
- Patch by policy, not by panic; track every dependency's known-vuln state.

## Quality Gates
- **Threat-model gate:** a model exists, is current, and its high risks are mitigated or accepted.
- **Authz gate:** every access path is server-enforced and least-privilege.
- **Secrets gate:** zero secrets in code/logs/history; rotation and storage proven.
- **Supply-chain gate:** no unwaived critical/high dependency findings; SBOM present.
- **Resilience gate:** controls fail closed; breach is detectable and traceable.
- All gates green, or a recorded human-owner/Chief-Auditor risk acceptance for the exact gap.

## Risk Analysis Lens
- **Confidentiality** — what leaks, to whom, and how would we know?
- **Integrity** — what can be tampered with undetected?
- **Availability** — what takes the system down, and how cheaply?
- **Blast radius** — how far does one compromise spread before it is contained?
- **Detectability** — if breached, do we see it, prove it, and recover?
