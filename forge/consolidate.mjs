#!/usr/bin/env node
// Forge consolidation CLI — the owned-memory "sleep" step (owned-memory v1, layer C).
// Reviews memory/registers/forge-lessons.md, folds exact/near-duplicate Lesson rows into one
// row with a `×N seen` tally + earliest date, and promotes lessons seen ≥3× and marked firm
// up into lessons-learned.md.
//
//   node forge/consolidate.mjs [--dry-run] [--apply]
//
// DRY-RUN BY DEFAULT: with no flag (or --dry-run) it prints the diff plan and writes NOTHING.
// Only --apply mutates, and even then it first backs the register up to
// memory/registers/.attic/ and appends a `## Consolidation log` entry, so every fold is one
// file-restore or `git revert` away (Directives #7/#8 — distil, never erase).
//
// Writes only under memory/registers/ via the trusted runtime; never touches a workspace, so
// the workspace guardrail is never relaxed. No new deps, model-agnostic, fully offline.
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { consolidate } from './runtime/consolidate.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..'); // forge/ → repo root

let flags;
try {
  ({ values: flags } = parseArgs({
    options: {
      'dry-run': { type: 'boolean', default: false },
      apply: { type: 'boolean', default: false },
    },
  }));
} catch (e) {
  process.stderr.write('forge/consolidate.mjs: ' + e.message + '\n');
  process.stderr.write('Usage: node forge/consolidate.mjs [--dry-run] [--apply]\n');
  process.exit(2);
}

// --apply is the ONLY thing that writes. --dry-run is the default and is implied whenever
// --apply is absent; passing both is treated as a dry run (the safe choice).
const apply = flags.apply && !flags['dry-run'];

const res = consolidate(repoRoot, { apply });

process.stdout.write(`forge: consolidate forge-lessons.md — mode=${apply ? 'APPLY' : 'dry-run'}\n\n`);
process.stdout.write((res.report || '(no report)') + '\n');

if (!apply) {
  process.stdout.write('\nDry run — nothing written. Re-run with --apply to consolidate.\n');
} else if (res.applied) {
  process.stdout.write('\nApplied.\n');
  if (res.atticPath) process.stdout.write('  backup:   ' + res.atticPath + '\n');
  if (res.lessonsWritten) process.stdout.write('  register: ' + res.lessonsWritten + '\n');
  if (res.promotedTo) process.stdout.write('  promoted: ' + res.promotedTo + '\n');
} else {
  process.stdout.write('\nNothing to apply — register already clean.\n');
}
