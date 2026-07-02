// Harm-law integrity guard for Directive #11 (do no harm).
//
// NON-DESTRUCTIVE BY LAW. This module's ONLY side effect, anywhere, is reading two
// law files read-only. It never writes, deletes, truncates, moves, encrypts, spawns
// a process, or opens a socket. Its sole power is to report {ok:false, reason}; the
// callers may then refuse to run or fail the gate. Refusing is not destroying.
// Deleting a user's work to "protect" Directive #11 would itself violate Directive #11.
//
// Intactness is judged by ROBUST structural markers + an N-of-M token vote — never a
// brittle hash — so legitimate edits, translations, reformatting, and TIGHTENING all
// pass; only removal or gutting fails.
import { readFileSync } from 'node:fs';
import path from 'node:path';

const PRIME_REL = 'kernel/laws/prime-directives.md';
const HARM_REL = 'kernel/laws/harm-prevention.md';

// Normalize for matching: lowercase + collapse all whitespace runs to single spaces.
// Reformatting, reflowing, and capitalization changes become invisible to the check.
function norm(s) {
  return String(s).toLowerCase().replace(/\s+/g, ' ').trim();
}

// Core-clause tokens. The vote is a SET (4-of-6), so rewording or translating any one
// word cannot trip the guard. Tightening only ADDS tokens, never removes them.
const CORE_TOKENS = [
  /do no harm/,
  /harm/,
  /purpose/,
  /refus|abort/,
  /deceive|exploit|surveil|endanger|manipulat|defraud|weapon/,
  /never .*(loosen|weaken|overrid|set aside)|cannot be set aside|stricter/,
];
const MIN_TOKENS = 4;
const MIN_HARM_CHARS = 400;

// Pure, filesystem-free. Fully unit-testable with tampered strings. Given the raw text
// of prime-directives.md and harm-prevention.md, decide whether Directive #11 is intact.
export function evaluateHarmLaw(primeText, harmText) {
  const prime = primeText == null ? '' : String(primeText);
  const harm = harmText == null ? '' : String(harmText);

  // M1: harm-prevention.md exists and is non-trivial (not gutted to a stub).
  const harmTrimmed = harm.trim();
  if (harmTrimmed.length === 0) {
    return { ok: false, reason: 'harm-prevention.md missing or empty' };
  }
  if (harmTrimmed.length < MIN_HARM_CHARS) {
    return { ok: false, reason: 'harm-prevention.md gutted to a stub (' + harmTrimmed.length + ' chars, need >= ' + MIN_HARM_CHARS + ')' };
  }

  // M2: the Directive #11 heading is present. The NUMBER is the stable anchor, not the
  // wording — retitling or translating the heading text still passes.
  if (!/^##\s*11\.\s/m.test(prime)) {
    return { ok: false, reason: 'Directive #11 heading (## 11.) absent from prime-directives.md' };
  }

  // Core-clause token vote across BOTH texts combined, normalized.
  const combined = norm(prime) + ' ' + norm(harm);
  const present = CORE_TOKENS.filter((re) => re.test(combined)).length;
  if (present < MIN_TOKENS) {
    return { ok: false, reason: 'forbidden-purpose core clause gutted (only ' + present + '/' + CORE_TOKENS.length + ' core markers present, need >= ' + MIN_TOKENS + ')' };
  }

  // M3 — ANTI-INVERSION. The structural+token checks above detect REMOVAL/gutting, but a
  // law rewritten to PERMIT harm keeps the same words and would slip through. So scan the
  // Directive #11 clause itself for affirmative permission/exception constructions that the
  // genuine prohibition never contains ("may harm", "harm is permitted", "may override … to
  // harm", "do no harm — unless …"). The real clause says harm is "refused and aborted" and
  // that "no override … may set aside to cause harm" — a NEGATED form none of these match.
  // End-of-string must be (?![\s\S]) — a plain $ inside the lookahead would match at every
  // line end under the /m flag, making the lazy quantifier stop at the heading line and
  // leaving the clause body unscanned (the whole anti-inversion check would be dead code).
  const sec = norm((prime.match(/^##\s*11\.[\s\S]*?(?=\n##\s|\n---|\n#\s|(?![\s\S]))/m) || [''])[0]);
  const INVERSION = [
    /\b(may|can|allowed to|permitted to)\s+(harm|deceive|exploit|surveil|endanger|defraud|manipulat\w*)\b/,
    /\b(harm|deceive|exploit|surveil|endanger|defraud|manipulat\w*|weapon\w*)\b[^.]{0,30}\b(is|are)\s+(permitted|allowed|acceptable|authoriz\w*|ok)\b/,
    /\b(may|can)\s+(override|ignore|bypass|disregard)\b[^.]{0,40}\b(harm|directive|11|do no harm|this|it)\b/,
    /\bdo no harm\b[^.]{0,30}\bunless\b/,
    /\bunless\b[^.]{0,25}\b(order|instruct|told|asked|maintainer|permitted|request)\w*/,
  ];
  const inverted = INVERSION.find((re) => re.test(sec));
  if (inverted) {
    return { ok: false, reason: 'Directive #11 appears INVERTED to permit harm (matched a permission/exception clause in the #11 section)' };
  }

  return { ok: true, reason: 'Directive #11 intact (' + present + '/' + CORE_TOKENS.length + ' core markers)' };
}

// Reads the two law files read-only and delegates to evaluateHarmLaw. Fail-CLOSED:
// any missing/unreadable file or thrown error returns {ok:false} and NEVER throws past
// the caller. The ONLY side effect is reading those two files.
export function checkHarmLaw(repoRoot) {
  let primeText;
  let harmText;
  try {
    primeText = readFileSync(path.join(repoRoot, PRIME_REL), 'utf8');
  } catch {
    return { ok: false, reason: 'cannot read ' + PRIME_REL + ' — Directive #11 source missing' };
  }
  try {
    harmText = readFileSync(path.join(repoRoot, HARM_REL), 'utf8');
  } catch {
    return { ok: false, reason: 'cannot read ' + HARM_REL + ' — harm-prevention elaboration missing' };
  }
  try {
    return evaluateHarmLaw(primeText, harmText);
  } catch (e) {
    return { ok: false, reason: 'integrity check error: ' + (e && e.message ? e.message : String(e)) };
  }
}
