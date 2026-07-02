// Forge runtime — the agent's executable tools, with guardrails.
// READ tools work repo-wide; WRITE is restricted to the agent's workspace; the GATE
// is a first-class tool so the agent can verify before it claims (Directive #9).
import fs from 'node:fs';
import path from 'node:path';
import { execSync, spawnSync } from 'node:child_process';
import PptxGenJS from 'pptxgenjs';

// The `delegate` tool is OFF by default. It is advertised only when FORGE_SUBAGENTS=on,
// so default runs see an identical tool set and CI stays stable. `depth` is the CURRENT
// loop depth; once it has reached the cap there is no budget left to delegate, so the
// schema is withheld even when the flag is on.
export function subagentsEnabled(depth = 0) {
  if (process.env.FORGE_SUBAGENTS !== 'on') return false;
  const cap = Number(process.env.FORGE_MAX_DEPTH) || 1;
  return depth < cap;
}

// `run_code` is OFF by default — same opt-in pattern as `delegate`. See the long comment
// on the tool implementation below for exactly what this does and does NOT protect against
// before ever setting FORGE_ALLOW_EXEC=on.
export function execEnabled() {
  return process.env.FORGE_ALLOW_EXEC === 'on';
}

export function toolSchemas({ depth = 0 } = {}) {
  const schemas = [
    { name: 'list_dir', description: 'List entries at a path (relative to repo root).', input_schema: { type: 'object', properties: { path: { type: 'string' } }, required: ['path'] } },
    { name: 'read_file', description: 'Read a UTF-8 file (relative to repo root).', input_schema: { type: 'object', properties: { path: { type: 'string' } }, required: ['path'] } },
    { name: 'read_many', description: 'Read several UTF-8 files in ONE call instead of one read_file call per file — use when you already know which files you need next, to save round trips. Same containment as read_file, per path (max 20 paths; each result is more tightly clipped than a single read_file, since several share one response).', input_schema: { type: 'object', properties: { paths: { type: 'array', items: { type: 'string' }, description: 'Repo-relative paths to read.' } }, required: ['paths'] } },
    { name: 'write_file', description: 'Write a file. Restricted to the agent workspace.', input_schema: { type: 'object', properties: { path: { type: 'string' }, content: { type: 'string' } }, required: ['path', 'content'] } },
    { name: 'write_csv', description: 'Write a spreadsheet-compatible CSV file (opens natively in Excel/Sheets/Numbers) — the dependency-free equivalent of a spreadsheet deliverable. Restricted to the agent workspace, same as write_file: "path" is relative to the REPO ROOT (like read_file/write_file) and must resolve inside your workspace folder.', input_schema: { type: 'object', properties: { path: { type: 'string', description: 'Repo-root-relative path that must fall inside your workspace, e.g. "<your-agent-dir>/workspace/report.csv".' }, headers: { type: 'array', items: { type: 'string' }, description: 'Column headers (optional).' }, rows: { type: 'array', items: { type: 'array' }, description: 'Row data — an array of rows, each row an array of cell values.' } }, required: ['path', 'rows'] } },
    { name: 'write_pptx', description: 'Write a real PowerPoint presentation (.pptx) — a genuine end-to-end deliverable, not a text stand-in. Restricted to the agent workspace, same as write_file/write_csv: "path" is relative to the REPO ROOT and must resolve inside your workspace folder. Each slide gets an optional title and an optional bulleted list.', input_schema: { type: 'object', properties: { path: { type: 'string', description: 'Repo-root-relative path that must fall inside your workspace, e.g. "<your-agent-dir>/workspace/deck.pptx".' }, title: { type: 'string', description: 'Presentation title (document metadata; optional).' }, slides: { type: 'array', items: { type: 'object', properties: { title: { type: 'string' }, bullets: { type: 'array', items: { type: 'string' } } } }, description: 'Ordered list of slides.' } }, required: ['path', 'slides'] } },
    { name: 'run_gate', description: 'Run the conformance gate (npm test). Verify before finishing.', input_schema: { type: 'object', properties: {} } },
    { name: 'plan', description: 'Record an ordered checklist of the steps you intend to take. Replaces any current plan.', input_schema: { type: 'object', properties: { steps: { type: 'array', items: { type: 'string' }, description: 'Ordered list of step descriptions.' } }, required: ['steps'] } },
    { name: 'update_plan', description: 'Revise the current plan: mark steps done/dropped by their 1-based number, add steps, or replace the whole list.', input_schema: { type: 'object', properties: { complete: { type: 'array', items: { type: 'integer' }, description: '1-based step numbers to mark done.' }, drop: { type: 'array', items: { type: 'integer' }, description: '1-based step numbers to drop.' }, add: { type: 'array', items: { type: 'string' }, description: 'New steps to append.' }, steps: { type: 'array', items: { type: 'string' }, description: 'Full replacement checklist (re-plan).' } } } },
    { name: 'finish', description: 'End the run with a short summary of what was accomplished.', input_schema: { type: 'object', properties: { summary: { type: 'string' } }, required: ['summary'] } },
  ];
  if (subagentsEnabled(depth)) {
    schemas.push({ name: 'delegate', description: 'Decompose a self-contained sub-task into a bounded sub-run (same workspace, its own gate). Use sparingly for a distinct, decomposable piece of work; depth-capped. If you have MULTIPLE independent sub-tasks, call this tool more than once in the SAME turn — those calls run concurrently, not one-at-a-time.', input_schema: { type: 'object', properties: { task: { type: 'string', description: 'The self-contained sub-task for the sub-run to accomplish.' } }, required: ['task'] } });
  }
  if (execEnabled()) {
    schemas.push({ name: 'run_code', description: 'Run a short Node.js script and capture its stdout/stderr. Use ONLY for computation you cannot do with the other tools (data transforms, chaining several operations in one round trip) — prefer write_file/write_csv for anything that must land in the workspace, since this tool\'s writes are NOT confined to it. Time-limited; no network credentials are passed to it. This is process isolation, not a security sandbox — treat it as running a local script you wrote yourself.', input_schema: { type: 'object', properties: { code: { type: 'string', description: 'JavaScript source, run with `node -e`.' } }, required: ['code'] } });
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

// RFC 4180-ish CSV rendering. Dependency-free by design (Node built-ins only, same as the
// rest of the runtime) — a field is quoted only when it needs to be (contains a comma,
// quote, or newline), with internal quotes doubled. CRLF line endings for the widest
// spreadsheet-app compatibility.
function csvField(v) {
  const s = v === null || v === undefined ? '' : String(v);
  return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}
function toCsv(headers, rows) {
  const lines = [];
  if (Array.isArray(headers) && headers.length) lines.push(headers.map(csvField).join(','));
  for (const row of rows || []) lines.push((Array.isArray(row) ? row : [row]).map(csvField).join(','));
  return lines.join('\r\n') + '\r\n';
}

export async function runTool(name, input, ctx) {
  try {
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
    // Batch read: the safe subset of "programmatic tool calling" — several reads in one
    // round trip. No new safety surface: every path goes through the exact same `within()`
    // containment check `read_file` uses, one at a time, and a failed path becomes an
    // inline error line rather than aborting the whole batch (so one bad path in twenty
    // doesn't cost the other nineteen). Capped at 20 paths and a tighter per-file clip so a
    // large batch cannot silently blow past the runtime's context-trim budget.
    if (name === 'read_many') {
      const paths = Array.isArray(input.paths) ? input.paths.slice(0, 20) : [];
      if (!paths.length) return deny('read_many requires a non-empty "paths" array (max 20).');
      const parts = paths.map((rp) => {
        const p = within(ctx.repoRoot, rp);
        if (p.error) return `--- ${rp} ---\nERROR: ${p.error}`;
        try { return `--- ${rp} ---\n${clip(fs.readFileSync(p.path, 'utf8'), 3000)}`; }
        catch (e) { return `--- ${rp} ---\nERROR: ${e.message}`; }
      });
      return ok(clip(parts.join('\n\n'), 8000));
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
    // Dependency-free spreadsheet deliverable: CSV opens natively in Excel/Sheets/Numbers.
    // Same write-confinement as write_file — this is not a new capability, just a second,
    // structured way to call the same restricted write.
    if (name === 'write_csv') {
      const p = within(ctx.workspace, input.path, ctx.repoRoot);
      if (p.error) {
        return deny('GUARDRAIL: Directive #5 — writes are restricted to the workspace ' +
          rel(ctx.repoRoot, ctx.workspace) + ' (' + p.error + ').');
      }
      if (!Array.isArray(input.rows)) return deny('write_csv requires a "rows" array (array of arrays).');
      fs.mkdirSync(path.dirname(p.path), { recursive: true });
      fs.writeFileSync(p.path, toCsv(input.headers, input.rows));
      return ok('wrote ' + rel(ctx.repoRoot, p.path) + ` (${input.rows.length} row(s))`);
    }
    // Real .pptx via a well-tested third-party library (pptxgenjs), not a hand-rolled OOXML
    // writer — the file format's own correctness is exactly the kind of thing better left to
    // a library thousands of people already depend on than re-derived from scratch in one
    // pass with no way here to open the result in real PowerPoint and confirm it isn't
    // subtly corrupt. Same workspace confinement as write_file/write_csv.
    if (name === 'write_pptx') {
      const p = within(ctx.workspace, input.path, ctx.repoRoot);
      if (p.error) {
        return deny('GUARDRAIL: Directive #5 — writes are restricted to the workspace ' +
          rel(ctx.repoRoot, ctx.workspace) + ' (' + p.error + ').');
      }
      if (!Array.isArray(input.slides) || !input.slides.length) return deny('write_pptx requires a non-empty "slides" array.');
      try {
        const pptx = new PptxGenJS();
        if (input.title) pptx.title = String(input.title);
        for (const s of input.slides) {
          const slide = pptx.addSlide();
          const slideTitle = String((s && s.title) || '').trim();
          if (slideTitle) slide.addText(slideTitle, { x: 0.5, y: 0.3, w: 9, h: 1, fontSize: 28, bold: true });
          const bullets = Array.isArray(s && s.bullets) ? s.bullets : [];
          if (bullets.length) {
            slide.addText(
              bullets.map((b) => ({ text: String(b), options: { bullet: true, breakLine: true } })),
              { x: 0.5, y: 1.5, w: 9, h: 5, fontSize: 18 }
            );
          }
        }
        fs.mkdirSync(path.dirname(p.path), { recursive: true });
        await pptx.writeFile({ fileName: p.path });
        return ok('wrote ' + rel(ctx.repoRoot, p.path) + ` (${input.slides.length} slide(s))`);
      } catch (e) {
        return deny('GUARDRAIL/ERROR: pptx generation failed: ' + e.message);
      }
    }
    // run_code — OFF by default (FORGE_ALLOW_EXEC=on required; withheld from the schema
    // otherwise, so a default run's tool set is unchanged and this branch is unreachable).
    //
    // WHAT THIS ACTUALLY PROTECTS AGAINST, PRECISELY:
    //   - A genuinely separate OS process (spawnSync, not vm/eval-in-process), so a crash
    //     or hang in the script cannot take down the runtime itself.
    //   - A hard wall-clock timeout (FORGE_EXEC_TIMEOUT_MS, default 10s) — SIGKILL on expiry.
    //   - A capped environment: the child gets PATH (+ SystemRoot on Windows, needed to
    //     resolve node.exe) and NOTHING else — ANTHROPIC_API_KEY and every other secret in
    //     this process's environment is NOT inherited.
    //   - A capped output size, same clip() every other tool uses.
    //
    // WHAT THIS DOES NOT PROTECT AGAINST — read this before setting FORGE_ALLOW_EXEC=on:
    //   Node has NO built-in security sandbox (the Node docs say this explicitly about the
    //   `vm` module, and a plain child process has none either). The script can read/write
    //   ANY file the OS user running Forge can touch — it is NOT confined to ctx.workspace
    //   the way write_file/write_csv are, because that confinement is enforced by the
    //   `within()` check on OUR code path, and arbitrary JS run in a child process does not
    //   go through it. It can also make network requests. Treat FORGE_ALLOW_EXEC=on as
    //   equivalent to letting the agent run any script YOU could run locally — the guardrail
    //   here is "time-boxed, no inherited secrets, separate process," not "sandboxed."
    if (name === 'run_code') {
      // Defense in depth: enforce the flag HERE too, not just by withholding the schema.
      // A tool call reaching this function should never happen when the feature is off
      // (the model was never offered the tool), but the guardrail must not rely solely on
      // "the model played along with what it was advertised" — same principle as every
      // other guardrail in this file.
      if (!execEnabled()) return deny('GUARDRAIL: run_code is disabled (set FORGE_ALLOW_EXEC=on to enable).');
      const code = typeof input.code === 'string' ? input.code : '';
      if (!code.trim()) return deny('run_code requires non-empty "code".');
      const timeoutMs = Number(process.env.FORGE_EXEC_TIMEOUT_MS) || 10000;
      const childEnv = { PATH: process.env.PATH || '' };
      if (process.env.SystemRoot) childEnv.SystemRoot = process.env.SystemRoot; // Windows needs this to resolve node.exe
      const r = spawnSync(process.execPath, ['-e', code], {
        cwd: ctx.workspace,
        env: childEnv,
        timeout: timeoutMs,
        encoding: 'utf8',
        maxBuffer: 1024 * 1024,
      });
      if (r.error && r.error.code === 'ETIMEDOUT') {
        return deny(`GUARDRAIL: run_code exceeded its ${timeoutMs}ms time limit and was killed.`);
      }
      const out = clip((r.stdout || '') + (r.stderr ? '\n[stderr]\n' + r.stderr : ''), 8000);
      return r.status === 0 ? ok(out || '(no output)') : deny(out || `exited with code ${r.status}`);
    }
    if (name === 'run_gate') {
      try {
        const out = execSync('node tests/conformance/run.mjs', { cwd: ctx.repoRoot, encoding: 'utf8' });
        return ok(out);
      } catch (e) {
        return deny((e.stdout || '') + (e.stderr || ''));
      }
    }
    return deny('GUARDRAIL: unknown tool: ' + name);
  } catch (e) {
    return deny('GUARDRAIL/ERROR: ' + e.message);
  }
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
