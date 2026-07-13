#!/usr/bin/env node
// Minimal local-first console replacing the legacy Python launcher entrypoint.
import { spawnSync } from 'node:child_process';
import { createInterface } from 'node:readline/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { profileFrom } from './runtime/autonomy.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..');
const agent = process.env.FORGE_AGENT || 'forge/examples/balance-scout';
const profile = profileFrom(process.env.FORGE_PROFILE);
const prompt = createInterface({ input: process.stdin, output: process.stdout });

process.stdout.write(`AIEOS local console — profile=${profile}. Type sair to close.\n`);
try {
  for (;;) {
    const goal = (await prompt.question('AIEOS> ')).trim();
    if (!goal) continue;
    if (['sair', 'exit', 'quit'].includes(goal.toLowerCase())) break;
    const result = spawnSync(process.execPath, [path.join(here, 'run.mjs'), agent, goal, '--profile', profile], {
      cwd: repoRoot, stdio: 'inherit', windowsHide: true,
    });
    if (result.error) process.stderr.write(`forge launch failed: ${result.error.message}\n`);
  }
} finally { prompt.close(); }
