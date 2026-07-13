// Forge runtime — the agent's executable tools, with guardrails.
// READ tools work repo-wide; WRITE is restricted to the agent's workspace; the GATE
// is a first-class tool so the agent can verify before it claims (Directive #9).
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync, execSync } from 'node:child_process';
import { createInterface } from 'node:readline/promises';
import { networkAllowed, permits, profileFrom, requiresApproval, sandboxRunner } from './autonomy.mjs';

// The `delegate` tool is OFF by default. It is advertised only when FORGE_SUBAGENTS=on,
// so default runs see an identical tool set and CI stays stable. `depth` is the CURRENT
// loop depth; once it has reached the cap there is no budget left to delegate, so the
// schema is withheld even when the flag is on.
export function subagentsEnabled(depth = 0) {
  if (process.env.FORGE_SUBAGENTS !== 'on') return false;
  const cap = Number(process.env.FORGE_MAX_DEPTH) || 1;
  return depth < cap;
}

export function toolSchemas({ depth = 0, profile = 'supervised' } = {}) {
  const activeProfile = profileFrom(profile);
  const schemas = [
    { name: 'list_dir', description: 'List entries at a path (relative to repo root).', input_schema: { type: 'object', properties: { path: { type: 'string' } }, required: ['path'] } },
    { name: 'read_file', description: 'Read a UTF-8 file (relative to repo root).', input_schema: { type: 'object', properties: { path: { type: 'string' } }, required: ['path'] } },
    { name: 'plan', description: 'Record an ordered checklist of the steps you intend to take. Replaces any current plan.', input_schema: { type: 'object', properties: { steps: { type: 'array', items: { type: 'string' }, description: 'Ordered list of step descriptions.' } }, required: ['steps'] } },
    { name: 'update_plan', description: 'Revise the current plan: mark steps done/dropped by their 1-based number, add steps, or replace the whole list.', input_schema: { type: 'object', properties: { complete: { type: 'array', items: { type: 'integer' }, description: '1-based step numbers to mark done.' }, drop: { type: 'array', items: { type: 'integer' }, description: '1-based step numbers to drop.' }, add: { type: 'array', items: { type: 'string' }, description: 'New steps to append.' }, steps: { type: 'array', items: { type: 'string' }, description: 'Full replacement checklist (re-plan).' } } } },
    { name: 'finish', description: 'End the run with a short summary of what was accomplished.', input_schema: { type: 'object', properties: { summary: { type: 'string' } }, required: ['summary'] } },
  ];
  if (permits(activeProfile, 'write_file')) schemas.splice(2, 0,
    { name: 'write_file', description: 'Write a file. Restricted to the active workspace.', input_schema: { type: 'object', properties: { path: { type: 'string' }, content: { type: 'string' } }, required: ['path', 'content'] } },
    { name: 'run_gate', description: 'Run the conformance gate. Verify before finishing.', input_schema: { type: 'object', properties: {} } },
  );
  if (permits(activeProfile, 'run_command')) schemas.splice(4, 0,
    { name: 'run_command', description: 'Run a structured command through the configured hardened sandbox runner.', input_schema: { type: 'object', properties: { program: { type: 'string' }, args: { type: 'array', items: { type: 'string' } }, cwd: { type: 'string' } }, required: ['program', 'args'] } },
    { name: 'fetch_url', description: 'Fetch an allowlisted HTTP(S) URL with bounded output.', input_schema: { type: 'object', properties: { url: { type: 'string' } }, required: ['url'] } },
    { name: 'install_package', description: 'Install a package through the configured hardened sandbox runner.', input_schema: { type: 'object', properties: { manager: { type: 'string' }, packages: { type: 'array', items: { type: 'string' } } }, required: ['manager', 'packages'] } },
  );
  if (permits(activeProfile, 'delegate') && subagentsEnabled(depth)) {
    schemas.push({ name: 'delegate', description: 'Decompose a self-contained sub-task into a bounded sub-run (same workspace, its own gate). Use sparingly for a distinct, decomposable piece of work; depth-capped.', input_schema: { type: 'object', properties: { task: { type: 'string', description: 'The self-contained sub-task for the sub-run to accomplish.' } }, required: ['task'] } });
  }
  return schemas;
}

const ok = (output) => ({ ok: true, output });
const deny = (output) => ({ ok: false, output });

// Bounded read: cut at `max` bytes and tell the model data was withheld (no silent loss).
function clip(text, max = 8000) {
  const buf = Buffer.from(text, 'utf8');
  if (buf.length <= max) return text;
  return buf.slice(0, max).toString('utf8') + `\n…[truncated ${buf.length - max} of ${buf.length} bytes]`;
}

export async function runTool(name, input, ctx) {
  try {
    const profile = profileFrom(ctx.profile);
    if (!permits(profile, name)) return deny(`GUARDRAIL: ${name} is unavailable in the ${profile} profile.`);
    if (requiresApproval(profile, name) && !(await approved(name, input))) return deny(`GUARDRAIL: operator declined ${name}.`);
    if (name === 'list_dir') {
      const p = within(ctx.repoRoot, input.path);
      if (p.error) return deny(p.error);
      return ok(clip(fs.readdirSync(p.path, { withFileTypes: true }).map((e) => e.name + (e.isDirectory() ? '/' : '')).join('\n')));
    }
    if (name === 'read_file') {
      const p = within(ctx.repoRoot, input.path);
      if (p.error) return deny(p.error);
      return ok(clip(fs.readFileSync(p.path, 'utf8')));
    }
    if (name === 'write_file') {
      const p = within(ctx.workspace, input.path, ctx.repoRoot);
      if (p.error) {
        return deny('GUARDRAIL: Directive #5 — writes are restricted to the workspace ' +
          rel(ctx.repoRoot, ctx.workspace) + ' (' + p.error + ').');
      }
      fs.mkdirSync(path.dirname(p.path), { recursive: true });
      fs.writeFileSync(p.path, input.content);
      return ok('wrote ' + rel(ctx.repoRoot, p.path));
    }
    if (name === 'run_gate') {
      try {
        const out = execSync('node tests/conformance/run.mjs', { cwd: ctx.repoRoot, encoding: 'utf8' });
        return ok(out);
      } catch (e) {
        return deny((e.stdout || '') + (e.stderr || ''));
      }
    }
    if (name === 'run_command') return runSandboxAction('command', input, ctx);
    if (name === 'install_package') return runSandboxAction('install', input, ctx);
    if (name === 'fetch_url') return fetchUrl(input, ctx);
    return deny('GUARDRAIL: unknown tool: ' + name);
  } catch (e) {
    return deny('GUARDRAIL/ERROR: ' + e.message);
  }
}

async function approved(name, input) {
  if (process.env.FORGE_APPROVE === 'all') return true;
  if (!process.stdin.isTTY) return false;
  const prompt = createInterface({ input: process.stdin, output: process.stdout });
  try {
    const answer = await prompt.question(`Forge approval required for ${name} ${JSON.stringify(input)}. Allow? [y/N] `);
    return /^y(es|sim)?$/i.test(answer.trim());
  } finally { prompt.close(); }
}

function runSandboxAction(action, input, ctx) {
  const runner = sandboxRunner();
  if (!runner) return deny('GUARDRAIL: autonomous command and installation actions require FORGE_SANDBOX_RUNNER as an existing absolute path.');
  const timeout = Math.min(Math.max(Number(process.env.FORGE_SANDBOX_TIMEOUT_MS) || 120000, 1000), 300000);
  try {
    const output = execFileSync(runner, [], {
      cwd: ctx.workspace,
      input: JSON.stringify({ action, input, workspace: ctx.workspace }),
      encoding: 'utf8', timeout, windowsHide: true, maxBuffer: 1024 * 1024,
    });
    return ok(clip(output));
  } catch (error) {
    return deny(clip(String(error.stdout || '') + String(error.stderr || error.message || 'sandbox runner failed')));
  }
}

async function fetchUrl(input, ctx) {
  if (!networkAllowed(input.url)) return deny('GUARDRAIL: URL is not in FORGE_NETWORK_ALLOWLIST.');
  try {
    const response = await fetch(input.url, { redirect: 'error', signal: AbortSignal.timeout(15000) });
    if (!response.ok) return deny(`HTTP ${response.status}`);
    const buffer = Buffer.from(await response.arrayBuffer());
    if (buffer.length > 1024 * 1024) return deny('GUARDRAIL: response exceeds the 1 MiB limit.');
    return ok(clip(buffer.toString('utf8')));
  } catch (error) { return deny(`network request failed: ${error.message}`); }
}

function rel(root, p) {
  return path.relative(root, p).split(path.sep).join('/');
}

// Symlink-hardened containment. `rel` must resolve to inside `base`. We reject any `..`
// segment pre-resolution, then realpath the nearest existing ancestor so a symlink can't
// point the resolved path outside `base`. A trailing separator on the prefix stops
// `base-evil` from passing as inside `base`. Returns {path} or {error}.
function within(base, relPath, resolveFrom = base) {
  if (typeof relPath !== 'string' || relPath.length === 0) return { error: 'path is required' };
  const segments = relPath.split(/[\\/]/);
  if (segments.includes('..')) return { error: 'path contains a ".." segment' };

  const resolved = path.resolve(resolveFrom, relPath);
  const baseAbs = path.resolve(base);

  // Resolve symlinks on the deepest existing ancestor of both base and the target.
  const realBase = realAncestor(baseAbs);
  const realTarget = realAncestor(resolved);

  const prefix = realBase.endsWith(path.sep) ? realBase : realBase + path.sep;
  if (realTarget !== realBase && !realTarget.startsWith(prefix)) {
    return { error: 'path escapes ' + rel(resolveFrom, baseAbs) };
  }
  return { path: resolved };
}

// realpath of the closest existing ancestor directory (the target file may not exist yet).
function realAncestor(p) {
  let cur = p;
  for (;;) {
    try { return path.join(fs.realpathSync(cur), path.relative(cur, p)); }
    catch { /* not existing yet — walk up */ }
    const parent = path.dirname(cur);
    if (parent === cur) return p; // hit the root; nothing to resolve
    cur = parent;
  }
}
