# Incident Council — Output
Status: stable
Type: council
Owner: incident-commander
Extends: none

## Output format
Produces **incident minutes** appended to the company's `meeting-history`
register, using the
[report.template.md](../../templates/report.template.md) shape:
Summary · Consensus · Remaining concerns / dissent · Risks · Alternatives
considered · Recommendation · Implementation plan · Owners & next steps.

For an incident, read the sections as: *Consensus* = the agreed containment
action; *Alternatives considered* = the rollback/forward-fix paths rejected and
why; *Implementation plan* = the hotfix tracks and who owns each. The minutes are
filed even when the fix is obvious — an unrecorded incident did not happen
(Directive [#8](../../kernel/laws/prime-directives.md)).

## Dissent
Always present. If the room was unanimous under pressure, the record says
"unanimous" — silence is not consensus and is never assumed.

## Updates to memory
- Always: `meeting-history` — the dated incident minutes.
- If a gate was waived: `decision-log` — what was waived, by whom, and the reason.
- If a lesson emerges: `lessons-learned` — handed to the post-mortem, which may
  raise a kernel change proposal (Directive
  [#7](../../kernel/laws/prime-directives.md)).
- If recovery left known debt: `tech-debt-register` — tagged with the incident id.
