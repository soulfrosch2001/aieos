#!/usr/bin/env node
// Forge setup — one command to make a NEW machine run Forge live on the maintainer's
// Claude subscription (decision 0032/0033). Idempotent and non-destructive: checks before
// it changes, reports what it did, and never touches credentials (login stays a human
// act, by design — the runtime must not automate identity).
//
//   node forge/setup.mjs [--strong <id>] [--mid <id>] [--cheap <id>] [--no-env]
//
// What it does, in order:
//   1. claude CLI present?  → installs @anthropic-ai/claude-code globally if missing.
//   2. subscription login?  → detected via ~/.claude credentials; prints the one manual
//                             step (`claude` once, in a terminal) if absent.
//   3. environment          → persists FORGE_BACKEND=claude-cli + the model ladder
//                             (Windows: setx; elsewhere: prints the export lines).
//                             PRESERVES values already set — a machine whose maintainer
//                             chose a custom ladder (e.g. strong=claude-fable-5) keeps it
//                             across installer/update re-runs; --force overwrites.
//   4. proof                → prints the smoke command to verify end-to-end.
//
// Defaults: cheap=haiku, mid=sonnet, strong=opus. Pass --strong claude-fable-5 on plans
// that include Fable to make escalation reach the frontier model itself.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { parseArgs } from 'node:util';

const { values: flags } = parseArgs({
  options: {
    strong: { type: 'string', default: 'opus' },
    mid: { type: 'string', default: 'sonnet' },
    cheap: { type: 'string', default: 'haiku' },
    'no-env': { type: 'boolean', default: false },
    force: { type: 'boolean', default: false },
  },
});

const isWin = process.platform === 'win32';
const say = (s) => process.stdout.write(s + '\n');
const run = (cmd, args) => spawnSync(cmd, args, { encoding: 'utf8', shell: isWin, windowsHide: true });

say('Forge setup — subscription backend (claude-cli)');
say('');

// 1. CLI present?
let v = run('claude', ['--version']);
if (v.error || v.status !== 0) {
  say('[1/4] claude CLI not found — installing @anthropic-ai/claude-code globally via npm...');
  const inst = run('npm', ['install', '-g', '@anthropic-ai/claude-code']);
  if (inst.error || inst.status !== 0) {
    say('  FAILED to install: ' + String(inst.stderr || inst.error?.message || '').slice(0, 300));
    say('  Install manually (npm install -g @anthropic-ai/claude-code) and re-run this setup.');
    process.exit(1);
  }
  v = run('claude', ['--version']);
  if (v.error || v.status !== 0) {
    say('  Installed, but `claude` is still not on PATH — open a NEW terminal and re-run this setup.');
    process.exit(1);
  }
  say('  installed: ' + String(v.stdout).trim());
} else {
  say('[1/4] claude CLI present: ' + String(v.stdout).trim());
}

// 2. Login? Detected, never automated: credentials belong to the human.
const credJson = path.join(os.homedir(), '.claude', '.credentials.json');
const credDir = path.join(os.homedir(), '.claude');
const loggedIn = fs.existsSync(credJson) || fs.existsSync(path.join(credDir, 'settings.json'));
if (loggedIn) {
  say('[2/4] subscription login detected (~/.claude present).');
} else {
  say('[2/4] NO login detected — run `claude` once in a terminal and sign in with the Claude account, then re-run this setup.');
}

// 3. Environment — fill only what is MISSING, never silently overwrite a maintainer's
// choice (installer/update re-runs land here; a custom strong tier must survive them).
// The authoritative source on Windows is the user registry hive, not this process's
// possibly-stale env. --force overwrites everything with this invocation's values.
function currentUserEnv(name) {
  if (isWin) {
    const r = run('reg', ['query', 'HKCU\\Environment', '/v', name]);
    if (!r.error && r.status === 0) {
      const m = String(r.stdout).match(new RegExp(name + '\\s+REG_(?:EXPAND_)?SZ\\s+(.+)'));
      if (m) return m[1].trim();
    }
    return process.env[name] || '';
  }
  return process.env[name] || '';
}

const ladder = [
  ['FORGE_BACKEND', 'claude-cli'],
  ['FORGE_MODEL_CHEAP', flags.cheap],
  ['FORGE_MODEL_MID', flags.mid],
  ['FORGE_MODEL', flags.strong],
];
if (flags['no-env']) {
  say('[3/4] --no-env: leaving the environment untouched.');
} else if (isWin) {
  let ok = true;
  const done = [], kept = [];
  for (const [k, val] of ladder) {
    const existing = currentUserEnv(k);
    if (existing && !flags.force) { kept.push(k + '=' + existing); continue; }
    const r = run('setx', [k, val]);
    if (r.error || r.status !== 0) { ok = false; say('  setx ' + k + ' FAILED'); }
    else done.push(k + '=' + val);
  }
  if (done.length) say('[3/4] environment persisted (setx): ' + done.join(', ') + '. Open a NEW terminal to pick it up.');
  if (kept.length) say('[3/4] kept existing values (use --force to overwrite): ' + kept.join(', '));
  if (!done.length && !kept.length && !ok) say('[3/4] setx failed — set the variables manually.');
} else {
  say('[3/4] add these lines to your shell profile (~/.bashrc or ~/.zshrc) — skip any you already set:');
  for (const [k, val] of ladder) say('  export ' + k + '=' + val);
}

// 4. Proof.
say('[4/4] verify end-to-end (new terminal):');
say('  node forge/run.mjs --smoke');
say('');
say(loggedIn ? 'Done — this machine can run Forge live on the subscription.' : 'Done — after logging in (step 2), this machine can run Forge live on the subscription.');
