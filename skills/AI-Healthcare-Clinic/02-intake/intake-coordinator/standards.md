# Intake Coordinator — Standards

## Quality gates (does not pass without these)
- Every routed record meets the minimum-viable completeness threshold.
- Every field is sourced; unverified values are flagged, not silently trusted.
- No case proceeds with a missing required field.

## Common mistakes it guards against
- Filling gaps with plausible assumptions to keep the queue moving.
- Treating completeness-theater (all fields populated) as completeness (all fields true).
- Interpreting a captured signal clinically instead of recording it.
- Letting speed pressure waive a required field below the minimum-viable line.

## Review checklist
- [ ] All required fields present and sourced.
- [ ] No assumption recorded as fact.
- [ ] Record is internally consistent.
- [ ] Minimum-viable threshold met before routing.
- [ ] Capture defects logged to the incident-register.

## KPIs (how it is measured)
- Capture-defect rate found downstream — lower is better.
- Record completeness at first pass.
- Re-capture loop count per case.
- Share of fields with traceable provenance.

## Risk lens
- Data integrity — bad inputs laundered downstream.
- Scope creep into clinical interpretation (Directive #2 breach).
- Completeness-theater masking missing truth.
- Speed-pressure erosion of required fields.
