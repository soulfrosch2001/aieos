#!/usr/bin/env node
// Sync guarded session memory to the PRIVATE memory repo (~/.claude/aieos-memory) — separate
// from the public code repo. This is the SECOND security gate: it re-scans every ledger entry
// through the memory guard and refuses to push anything that still carries a secret or a
// high-severity flag. Quarantined entries are git-ignored in the memory repo (stay local).
//
//   aieos memory:sync
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import guard from './lib/memory-guard.mjs';

const MEMREPO = path.join(os.homedir(), '.claude', 'aieos-memory');
const LEDGER = path.join(MEMREPO, 'ledger');

if (!fs.existsSync(path.join(MEMREPO, '.git'))) {
  console.log('No private memory store at ~/.claude/aieos-memory. Clone it (git clone <aieos-memory>) to enable sync.');
  process.exit(0);
}

const sh = (cmd) => execSync(cmd, { cwd: MEMREPO, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
const shOk = (cmd) => { try { sh(cmd); return true; } catch { return false; } };

// --- Gate: re-scan tracked ledger entries (quarantine is git-ignored, never reaches here) ---
const entries = fs.existsSync(LEDGER) ? fs.readdirSync(LEDGER).filter((f) => f.endsWith('.md') && f !== 'README.md') : [];
const blocked = [];
for (const f of entries) {
  const text = fs.readFileSync(path.join(LEDGER, f), 'utf8');
  const fmSafe = !/^safe-to-publish:\s*false\s*$/im.test(text);
  const g = guard(text);
  if (!fmSafe || !g.safe || g.secrets > 0) blocked.push(f);
}
if (blocked.length) {
  console.error('✗ Memory sync REFUSED — these entries failed the security gate:\n  ' + blocked.join('\n  '));
  console.error('Move them to ledger/quarantine/ (git-ignored) and retry.');
  process.exit(1);
}

if (!shOk('git rev-parse --is-inside-work-tree')) process.exit(0);
if (!sh('git status --porcelain')) { console.log('Memory already synced — nothing new.'); process.exit(0); }

const date = new Date().toISOString().slice(0, 10);
sh('git add -A');
const committed = shOk(`git -c user.email="aieos@local" -c user.name="AIEOS" commit -q -m "memory sync ${date} (${entries.length} entr${entries.length === 1 ? 'y' : 'ies'})"`);
if (!committed) { console.log('Nothing to commit.'); process.exit(0); }

if (!shOk('git remote get-url origin')) { console.log('Committed locally. No "origin" remote on the memory repo.'); process.exit(0); }
try {
  const branch = sh('git rev-parse --abbrev-ref HEAD');
  sh(`git push origin ${branch}`);
  console.log(`Memory synced to the private repo (${entries.length} entries). ✓`);
} catch (e) {
  console.error('Commit succeeded but push failed (auth/remote?). Run `git push` in ~/.claude/aieos-memory.\n' + (e.message || ''));
  process.exit(1);
}
