# 02-intake
Status: stable
Type: department
Owner: triage-coordinator
Extends: none

## Mission
The intake department is the front door of the clinic. It is accountable for turning an unsorted stream of incoming cases into clean, correctly-routed, scheduled work — fast, fairly, and without ever crossing into clinical judgment. It captures the case, sizes its urgency, routes it to the right care path, and books the slot. It diagnoses nothing; it organizes everything.

## Lead
[triage-coordinator](triage-coordinator/) — accountable for the department's output and quality.

## Agents
| Agent | Role in one line |
|-------|------------------|
| [triage-coordinator](triage-coordinator/) | Sorts incoming cases by urgency and routes each to the correct care path. |
| [intake-coordinator](intake-coordinator/) | Captures and validates the case record so downstream paths receive complete, clean data. |
| [scheduler](scheduler/) | Converts a routed case into a confirmed appointment slot, balancing throughput and fairness. |

## Councils it sits on
- [care-review-council](../councils/care-review-council/)
- [safety-council](../councils/safety-council/)

## Memory it feeds
- [incident-register](../memory/registers/incident-register.md) — intake mis-routes, capture defects, and access-safety near-misses.
- [care-lessons](../memory/registers/care-lessons.md) — recurring routing and scheduling lessons that improve the front door.

## Lifecycle
Every agent in this department follows the same agent contract and lifecycle.
A department adds agents by copying [../templates/agent.template.md](../../templates/agent.template.md).
