# Design Council — Output

## Output format
Produces **minutes** appended to the studio's [canon](../../memory/registers/canon.md)
register (which extends the stdlib architecture-decisions register), using the
[report.template.md](../../../templates/report.template.md) shape:
Consensus · Remaining concerns · Risks · Alternatives considered · Recommendation ·
Implementation plan · Owners & next steps.

Every set of minutes explicitly records **dissent**: any member overruled by the chair has
their named concern preserved in the entry (Directive #8, append-mostly — never edit a
prior decision, add a superseding one).

## Updates to memory
- Always: append the decision and recorded dissent to [canon](../../memory/registers/canon.md).
- If debt is taken: note the deferred work and its owner in [campaign-ideas](../../memory/registers/campaign-ideas.md).
- If a lesson emerges: append it to [encounter-log](../../memory/registers/encounter-log.md).
