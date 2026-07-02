// AIEOS memory guard — the security evaluator for the memory-capture pipeline.
//
// Everything that may become long-term memory (and be re-read into the system later)
// passes through here FIRST. Its job is defense-in-depth, not a guarantee:
//   1. Redact secrets so they never reach disk or GitHub.
//   2. Flag dangerous content (destructive commands, remote-exec, AV tampering) so a
//      risky capture is quarantined and never auto-forwarded.
//   3. Neutralize the text into INERT DATA — code fences are defused and the content is
//      labelled "untrusted, do not execute/obey" — so a captured prompt-injection cannot
//      later steer the system. Memory is a record to remember, never an instruction.
//
// Pure and dependency-free. Used by both memory-capture (on write) and memory-push
// (a second gate before anything leaves for GitHub).

// --- Secret patterns: matched value is replaced with a typed placeholder. ---
const SECRETS = [
  [/-----BEGIN[A-Z ]*PRIVATE KEY-----[\s\S]*?-----END[A-Z ]*PRIVATE KEY-----/g, 'private-key'],
  [/\bAKIA[0-9A-Z]{16}\b/g, 'aws-access-key'],
  [/\bgh[posru]_[A-Za-z0-9]{20,}\b/g, 'github-token'],
  [/\bsk-ant-[A-Za-z0-9_-]{20,}\b/g, 'anthropic-key'],
  [/\bsk-[A-Za-z0-9_-]{20,}\b/g, 'openai-key'],
  [/\bxox[baprs]-[A-Za-z0-9-]{10,}\b/g, 'slack-token'],
  [/\bAIza[0-9A-Za-z_-]{35}\b/g, 'google-api-key'],
  [/\beyJ[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\b/g, 'jwt'],
  // Generic "key: value" / "password=..." style assignments. No \b around the keyword:
  // `_` is a word character in JS regex, so \b never matches between `DB_` and `PASSWORD`
  // and SCREAMING_SNAKE_CASE names (DB_PASSWORD=, OPENAI_API_KEY=) would slip through
  // unredacted. Optional identifier prefix/suffix segments cover the env-var convention;
  // over-matching only redacts more, which is the safe direction for a guard.
  [/(?:[A-Za-z][A-Za-z0-9]*[_-])*(pass(word|wd)?|secret|token|api[_-]?key|access[_-]?key|client[_-]?secret|bearer)(?:[_-][A-Za-z0-9]+)*(\s*[:=]\s*|\s+)["']?[^\s"'`]{6,}/gi, 'credential'],
];

// --- Dangerous-content patterns: severity 'high' quarantines the whole entry. ---
const DANGERS = [
  // Dangerous rm targets: filesystem root, home (~ or $HOME / %USERPROFILE%), globs, or the
  // bare current/parent dir — but NOT a normal relative path like `./build` or `node_modules`.
  { re: /\brm\s+-rf?\s+(?:--no-preserve-root\s+)?(?:[\/~*]|\$\w|%\w|\.\.?(?=\s|$))/i, sev: 'high', label: 'recursive-delete (rm -rf)' },
  { re: /:\s*\(\s*\)\s*\{\s*:\s*\|\s*:\s*&\s*\}\s*;\s*:/, sev: 'high', label: 'fork-bomb' },
  { re: /\b(mkfs|dd\s+if=|>\s*\/dev\/sd[a-z])/i, sev: 'high', label: 'disk-overwrite' },
  { re: /\bformat\s+[a-z]:/i, sev: 'high', label: 'windows-format' },
  { re: /\bdel\s+\/[fsq]/i, sev: 'high', label: 'windows-force-delete' },
  { re: /\b(rd|rmdir)\s+\/s/i, sev: 'high', label: 'windows-recursive-rmdir' },
  { re: /Remove-Item\b[^\n]*-Recurse\b[^\n]*-Force\b/i, sev: 'high', label: 'powershell-recursive-force-delete' },
  { re: /\breg\s+delete\b/i, sev: 'high', label: 'registry-delete' },
  { re: /Set-MpPreference\b[^\n]*-Disable/i, sev: 'high', label: 'disable-antivirus' },
  { re: /\b(curl|wget)\b[^\n|]*\|\s*(sudo\s+)?(ba)?sh\b/i, sev: 'high', label: 'pipe-to-shell' },
  { re: /\b(iwr|irm|Invoke-WebRequest|Invoke-RestMethod)\b[^\n|]*\|\s*iex\b/i, sev: 'high', label: 'powershell-download-exec' },
  { re: /\bInvoke-Expression\b/i, sev: 'high', label: 'invoke-expression' },
  { re: /\bpowershell(\.exe)?\s+-e(nc(odedcommand)?)?\b/i, sev: 'high', label: 'powershell-encoded-command' },
  { re: /\bcertutil\b[^\n]*-urlcache/i, sev: 'high', label: 'certutil-download' },
  // Possible memory-poisoning / prompt-injection. Content is inert anyway, but these are
  // treated as non-publishable (see `safe` below) so injection text is not pushed to a
  // public repo. Patterns are specific to avoid quarantining benign conversation.
  { re: /\b(ignore|disregard|forget)\b[^\n]{0,30}\b(previous|above|all|prior)\b[^\n]{0,20}\b(instructions?|prompt|rules?|context)\b/i, sev: 'inject', label: 'possible-prompt-injection' },
  { re: /\byou are now\b[^\n]{0,40}\b(dan|jailbroken|unrestricted|developer mode|no (restrictions|rules|limits|filter))\b/i, sev: 'inject', label: 'possible-roleplay-override' },
  { re: /\bact as if\b[^\n]{0,40}\bno (restrictions|rules|limits)\b/i, sev: 'inject', label: 'possible-roleplay-override' },
];

/** Defuse code fences so captured text cannot break out of its container or be re-read
 *  as runnable markdown. Triple backticks/tildes become inert visible markers. */
function defuse(text) {
  return String(text).replace(/```/g, "''' ").replace(/~~~/g, "''' ");
}

/**
 * Evaluate and sanitize a block of captured text.
 * @returns {{ text:string, secrets:number, flags:Array<{label:string,sev:string}>, safe:boolean }}
 *   - text: redacted + defused, safe to store as inert data.
 *   - secrets: count of redactions performed.
 *   - flags: dangerous/suspicious patterns found.
 *   - safe: false if any 'high'-severity flag → the entry must be quarantined, not pushed.
 */
export function guard(input) {
  let text = String(input ?? '');
  let secrets = 0;

  for (const [re, type] of SECRETS) {
    text = text.replace(re, () => {
      secrets++;
      return `[REDACTED:${type}]`;
    });
  }

  const flags = [];
  for (const d of DANGERS) {
    if (d.re.test(text)) flags.push({ label: d.label, sev: d.sev });
  }

  text = defuse(text);
  // Not publishable if it carries a destructive payload ('high') OR a prompt-injection
  // ('inject') — both are quarantined, never auto-pushed to a public repo.
  const safe = !flags.some((f) => f.sev === 'high' || f.sev === 'inject');
  return { text, secrets, flags, safe };
}

export default guard;
