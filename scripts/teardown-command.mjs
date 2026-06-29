#!/usr/bin/env node
// Uninstall AIEOS from Claude Code, machine-wide. The inverse of `npm run setup`.
//
//   npm run teardown
//
// It undoes exactly what install-command.mjs wrote:
//
//   1. ~/.claude/commands/aieos.md  — the on-demand `/aieos` slash command (deleted).
//   2. ~/.claude/CLAUDE.md          — only the AIEOS:BEGIN/END block is removed; any of
//      your own content in that file is preserved. If nothing is left after removal, the
//      file is deleted too.
//
// Idempotent and safe: if there is nothing to remove, it says so and exits 0. It never
// throws on missing files.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const CLAUDE_DIR = path.join(os.homedir(), '.claude');
const COMMANDS_DIR = path.join(CLAUDE_DIR, 'commands');
const TARGET = path.join(COMMANDS_DIR, 'aieos.md');
const BOOTSTRAP = path.join(CLAUDE_DIR, 'CLAUDE.md');

// Same marker strings as install-command.mjs — must match exactly.
const BEGIN = '<!-- AIEOS:BEGIN (managed by npm run setup — do not edit between markers) -->';
const END = '<!-- AIEOS:END -->';

const removed = [];

// 1. Remove the /aieos slash command.
if (fs.existsSync(TARGET)) {
  fs.rmSync(TARGET);
  removed.push(`/aieos command   → ${TARGET}`);
}

// 2. Strip the AIEOS:BEGIN/END block from the machine-wide bootstrap.
if (fs.existsSync(BOOTSTRAP)) {
  const existing = fs.readFileSync(BOOTSTRAP, 'utf8');
  const re = new RegExp(`${BEGIN.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${END.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`);
  if (re.test(existing)) {
    const remainder = existing.replace(re, '').trim();
    if (remainder === '') {
      fs.rmSync(BOOTSTRAP);
      removed.push(`session bootstrap → ${BOOTSTRAP} (file was AIEOS-only, removed)`);
    } else {
      fs.writeFileSync(BOOTSTRAP, `${remainder}\n`, 'utf8');
      removed.push(`session bootstrap → ${BOOTSTRAP} (AIEOS block removed, your content kept)`);
    }
  }
}

if (removed.length === 0) {
  console.log('AIEOS is not installed machine-wide — nothing to remove.');
  process.exit(0);
}

console.log('AIEOS uninstalled machine-wide. Removed:');
for (const line of removed) {
  console.log(`  ${line}`);
}
console.log('  Run `npm run setup` to reinstall.');
