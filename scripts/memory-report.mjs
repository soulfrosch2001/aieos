#!/usr/bin/env node
// AIEOS memory report — a one-glance panel of what has arrived in the PRIVATE memory repo:
// how many opt-in users are sharing, how many memories total, your own session entries, and
// quarantined items. Pulls the latest from GitHub first, so it is always current.
//
//   aieos memory:report
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execSync } from 'node:child_process';

const MEMREPO = path.join(os.homedir(), '.claude', 'aieos-memory');
const LEDGER = path.join(MEMREPO, 'ledger');

if (!fs.existsSync(path.join(MEMREPO, '.git'))) {
  console.log('\nNo private memory store at ~/.claude/aieos-memory.');
  console.log('Clone it to read collected memory:  git clone https://github.com/soulfrosch2001/aieos-memory.git ~/.claude/aieos-memory\n');
  process.exit(0);
}

// Refresh from GitHub (user entries arrive there via the Worker, not this machine).
try { execSync('git pull --ff-only', { cwd: MEMREPO, stdio: 'ignore' }); } catch { /* offline / fine */ }

const isEntry = (f) => f.endsWith('.md') && f !== 'README.md';
const listDir = (p, pred) => { try { return fs.readdirSync(p).filter(pred); } catch { return []; } };

// Your own session entries (top-level ledger/*.md files).
const yours = listDir(LEDGER, (f) => isEntry(f) && (() => { try { return fs.statSync(path.join(LEDGER, f)).isFile(); } catch { return false; } })());

// Opt-in users (ledger/users/<id>/) and their memory counts.
const usersDir = path.join(LEDGER, 'users');
const userIds = listDir(usersDir, (d) => { try { return fs.statSync(path.join(usersDir, d)).isDirectory(); } catch { return false; } });
let userMemories = 0;
const perUser = userIds.map((u) => {
  const n = listDir(path.join(usersDir, u), isEntry).length;
  userMemories += n;
  return { u, n };
}).sort((a, b) => b.n - a.n);

const quarantined = listDir(path.join(LEDGER, 'quarantine'), isEntry).length;
let last = '—';
try { last = execSync('git log -1 --format=%cd --date=short', { cwd: MEMREPO, encoding: 'utf8' }).trim(); } catch { /* ignore */ }

const line = (k, v) => `  ${(k + ':').padEnd(18)} ${v}`;
console.log('');
console.log('  ┌─ AIEOS — Memory Report ───────────────────────────');
console.log(line('Private repo', 'soulfrosch2001/aieos-memory'));
console.log(line('Users sharing', `${userIds.length}  (${userMemories} memor${userMemories === 1 ? 'y' : 'ies'} total)`));
console.log(line('Your sessions', `${yours.length} entr${yours.length === 1 ? 'y' : 'ies'}`));
console.log(line('Quarantined', `${quarantined}`));
console.log(line('Last update', last));
if (perUser.length) {
  console.log('  ·');
  for (const { u, n } of perUser.slice(0, 10)) console.log(`    ${u.slice(0, 12).padEnd(12)} ${n} memor${n === 1 ? 'y' : 'ies'}`);
  if (perUser.length > 10) console.log(`    …and ${perUser.length - 10} more`);
}
console.log('  └───────────────────────────────────────────────────');
console.log('');
