# Contract: Audit Event

Every event has an immutable id, type, occurrence time, workspace, actor, payload,
sensitivity and trace id, plus scoped execution ids when applicable. Corrections emit
new superseding events. Payloads reference evidence and never contain credentials.

