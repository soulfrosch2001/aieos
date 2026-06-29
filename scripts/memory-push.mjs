#!/usr/bin/env node
// AIEOS memory push — the grouped, manual sync of captured memory to GitHub.
//
//   npm run memory:push
//
// This is the SECOND security gate. Before anything is committed/pushed it re-scans every
// tracked ledger entry through the memory guard (scripts/lib/memory-guard.mjs). If any entry
// still carries a secret or a high-severity flag (or is marked safe-to-publish: false), the
// push is REFUSED and the offending files are listed for manual review. Quarantined entries
// live under memory/ledger/quarantine/ (git-ignored) and are never pushed by this tool.
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import guard from './lib/memory-guard.mjs';

const AIEOS_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LEDGER = path.join(AIEOS_ROOT, 'memory', 'ledger');

const sh = (cmd) => execSync(cmd, { cwd: AIEOS_ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
const shOk = (cmd) => { try { sh(cmd); return true; } catch { return false; } };

// --- Gate: re-scan tracked ledger entries ---
const entries = fs.existsSync(LEDGER)
  ? fs.readdirSync(LEDGER).filter((f) => f.endsWith('.md') && f !== 'README.md')
  : [];

const blocked = [];
for (const f of entries) {
  const full = path.join(LEDGER, f);
  const text = fs.readFileSync(full, 'utf8');
  const fmSafe = !/^safe-to-publish:\s*false\s*$/im.test(text);
  const g = guard(text);
  if (!fmSafe || !g.safe || g.secrets > 0) {
    blocked.push({ f, secrets: g.secrets, flags: g.flags.map((x) => x.label), markedUnsafe: !fmSafe });
  }
}

if (blocked.length) {
  console.error('✗ Memory push REFUSED — these ledger entries failed the security gate:\n');
  for (const b of blocked) {
    console.error(`  • ${b.f}` +
      (b.secrets ? `  [${b.secrets} secret(s)]` : '') +
      (b.flags.length ? `  [flags: ${b.flags.join(', ')}]` : '') +
      (b.markedUnsafe ? '  [marked safe-to-publish: false]' : ''));
  }
  console.error('\nReview, redact, or move them to memory/ledger/quarantine/ and try again.');
  process.exit(1);
}

// --- Preconditions: git repo + a remote ---
if (!shOk('git rev-parse --is-inside-work-tree')) {
  console.error('Not a git repository yet. Run `git init`, add a GitHub remote (git remote add origin <url>), then retry.');
  process.exit(1);
}

const status = shOk('git status --porcelain') ? sh('git status --porcelain') : '';
if (!status) {
  console.log('Nothing to push — no changes in tracked memory.');
  process.exit(0);
}

// --- Commit the memory surface (ledger + decisions + changelog) ---
const date = new Date().toISOString().slice(0, 10);
sh('git add memory/ledger government/decisions CHANGELOG.md memory/registers');
const committed = shOk(`git commit -m "memory: capture sync ${date} (${entries.length} ledger entr${entries.length === 1 ? 'y' : 'ies'})"`);
if (!committed) { console.log('No staged memory changes to commit.'); process.exit(0); }
console.log(`Committed memory snapshot (${entries.length} ledger entries).`);

// --- Push if a remote exists ---
const hasOrigin = shOk('git remote get-url origin');
if (!hasOrigin) {
  console.log('No "origin" remote set. Commit done locally. Add one with:');
  console.log('  git remote add origin https://github.com/<you>/<repo>.git  &&  git push -u origin HEAD');
  process.exit(0);
}
try {
  const branch = sh('git rev-parse --abbrev-ref HEAD');
  sh(`git push origin ${branch}`);
  console.log(`Pushed memory to origin/${branch}. ✓`);
} catch (e) {
  console.error('Commit succeeded but push failed (auth/remote?). Run `git push` manually.\n' + (e.message || ''));
  process.exit(1);
}
