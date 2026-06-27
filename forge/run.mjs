#!/usr/bin/env node
// Forge runtime CLI — load an agent from its 5 contract files into a system prompt and
// run the plan→act→observe→reflect loop until it finishes.
//
//   node forge/run.mjs <agent-dir> "<goal>" [--dry-run] [--max-steps N] [--json]
//
// Model-agnostic: the model id comes ONLY from FORGE_MODEL. A live run (no --dry-run)
// with FORGE_MODEL unset errors clearly. --dry-run needs no model and no API key.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { runLoop } from './runtime/loop.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..'); // forge/ → repo root

let parsed;
try {
  parsed = parseArgs({
    allowPositionals: true,
    options: {
      'dry-run': { type: 'boolean', default: false },
      'max-steps': { type: 'string' },
      json: { type: 'boolean', default: false },
    },
  });
} catch (e) {
  usage(e.message); process.exit(2);
}

const [agentDir, goal] = parsed.positionals;
const flags = parsed.values;

if (!agentDir || !goal) { usage('missing <agent-dir> or "<goal>"'); process.exit(2); }

const dryRun = flags['dry-run'];
const model = process.env.FORGE_MODEL;
if (!dryRun && !model) {
  process.stderr.write('FORGE_MODEL is not set — export FORGE_MODEL=<model-id> or pass --dry-run\n');
  process.exit(3);
}

const maxSteps = flags['max-steps'] ? Number(flags['max-steps']) : undefined;

const CONTRACT_FILES = ['README.md', 'responsibilities.md', 'authority.md', 'craft.md', 'standards.md'];

const PREAMBLE = `You are an AIEOS agent running inside the Forge runtime. You act by calling tools in a
plan → act → observe → reflect loop until the goal is met, then you call \`finish\`.

Operating rules (Kernel Directives):
- Stay in your lane (Directive #2): only do work this agent owns. Read anywhere in the
  repo, but write ONLY inside your workspace via \`write_file\`.
- Never cross company lines (Directive #5): the runtime physically confines your writes
  to your own workspace folder. Treat a GUARDRAIL refusal as a signal to self-correct.
- Never skip the gate (Directive #9): if you wrote any file, you MUST call \`run_gate\`
  and see it pass before you call \`finish\`. A failing gate is information — read it, fix,
  and re-run; do not finish on a dirty, ungated change.

Tools: list_dir, read_file, write_file (workspace only), run_gate, finish.

Work in small steps. Each turn: briefly state your plan/reflection as text, then call the
tools that advance the goal. When the goal is satisfied, call \`finish\` with a short
summary that ends with a one-line self-check of whether the goal was actually met.`;

// ---- Load the agent: 5 contract files → one labeled system prompt.
const agentAbs = path.resolve(repoRoot, agentDir);
const agentName = path.basename(agentAbs);
let system;
try {
  system = loadAgent(agentAbs);
} catch (e) {
  process.stderr.write('Cannot load agent: ' + e.message + '\n');
  process.exit(4);
}

// ---- Lane (Directive #5): workspace derives from the agent's OWN folder, never input.
const workspace = path.join(agentAbs, 'workspace');
fs.mkdirSync(workspace, { recursive: true });
const ctx = { repoRoot, workspace };

run();

async function run() {
  const json = flags.json;
  const res = await runLoop({
    system, goal, ctx, model, dryRun, agent: agentName, maxSteps,
    onEvent: json ? () => {} : render,
  });

  if (json) {
    const trace = JSON.parse(fs.readFileSync(res.tracePath, 'utf8'));
    process.stdout.write(JSON.stringify(trace, null, 2) + '\n');
  } else {
    process.stdout.write('\n— outcome: ' + res.outcome + '\n');
    process.stdout.write('  gate clean: ' + res.gateClean + '\n');
    if (res.summary) process.stdout.write('  summary: ' + res.summary + '\n');
    process.stdout.write('  trace: ' + path.relative(repoRoot, res.tracePath).split(path.sep).join('/') + '\n');
  }
  process.exit(res.outcome === 'done' ? 0 : 1);
}

function render(ev) {
  if (ev.kind === 'plan') process.stdout.write(`[${ev.n}] plan: ${ev.text.split('\n')[0]}\n`);
  if (ev.kind === 'act' && ev.name) process.stdout.write(`[${ev.n}] act ${ev.name}${ev.input ? ' ' + compact(ev.input) : ''}\n`);
  if (ev.kind === 'observe') process.stdout.write(`[${ev.n}] observe ${ev.name} → ${ev.ok ? 'ok' : 'error'}\n`);
}

function compact(input) {
  const s = JSON.stringify(input);
  return s.length > 80 ? s.slice(0, 77) + '...' : s;
}

function loadAgent(dir) {
  if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) throw new Error('not a directory: ' + dir);
  const parts = [PREAMBLE];
  for (const f of CONTRACT_FILES) {
    const p = path.join(dir, f);
    if (!fs.existsSync(p)) throw new Error('missing contract file: ' + f);
    parts.push(`## ${f}\n\n` + fs.readFileSync(p, 'utf8').trim());
  }
  return parts.join('\n\n---\n\n');
}

function usage(msg) {
  if (msg) process.stderr.write('forge/run.mjs: ' + msg + '\n');
  process.stderr.write('Usage: node forge/run.mjs <agent-dir> "<goal>" [--dry-run] [--max-steps N] [--json]\n');
}
