// Forge runtime — EPISODIC memory (owned-memory v1, layer A). The richest owned record is
// the plan→act→observe→evaluate trace under forge/runs/*.json, yet the lexical corpus used
// to ignore it. This module turns each trace into a corpus doc so PAST RUNS become recallable
// memory: the next run can retrieve "we already tried X and it ended stuck because Y".
//
// Pure file I/O — no model, no embeddings, no new deps. Best-effort: a missing runs dir or a
// malformed trace is skipped, never fatal. Episodes carry the trace's mtime so the existing
// recency decay in retrieve() naturally favours fresh runs and caps how much old history can
// surface.
import fs from 'node:fs';
import path from 'node:path';

const RUNS_REL = 'forge/runs';

// Summarize one parsed trace into a compact, model-free record. Pure: same trace in → same
// record out. Pulls the goal, outcome, the structural verdict, the tools the run actually
// used, and the closing summary — exactly the signal a future run wants when deciding whether
// a similar goal has been attempted before.
export function summarizeRun(trace) {
  if (!trace || typeof trace !== 'object') return null;
  const steps = Array.isArray(trace.steps) ? trace.steps : [];
  const toolsUsed = [];
  const seen = new Set();
  for (const s of steps) {
    for (const a of (s && Array.isArray(s.actions) ? s.actions : [])) {
      if (a && a.name && !seen.has(a.name)) { seen.add(a.name); toolsUsed.push(a.name); }
    }
  }
  const ev = trace.evaluation || {};
  return {
    id: String(trace.tracePath || '').split('/').pop() || null,
    ts: trace.endedAt || trace.startedAt || null,
    agent: trace.agent || 'agent',
    goal: oneLine(trace.goal),
    outcome: trace.outcome || 'unknown',
    verdict: ev.verdict || null,
    toolsUsed,
    steps: steps.length,
    summary: oneLine(trace.summary),
    gateClean: !!trace.gateClean,
  };
}

// Map the most recent run traces into corpus docs of the shape gatherCorpus produces:
// { source, title, text, mtimeMs }. `text` concatenates goal + outcome + verdict + tools +
// summary so the existing retrieve() scores episodes unchanged. Sorted newest-first by mtime
// and capped at `limit` so episodes cannot swamp the curated registers; recency decay in the
// retriever does the rest. A `running`/incomplete trace with no useful text is dropped.
export function gatherEpisodes(repoRoot, { limit = 25 } = {}) {
  const dir = path.join(repoRoot, RUNS_REL);
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return []; }

  const files = entries
    .filter((e) => e.isFile() && e.name.endsWith('.json'))
    .map((e) => {
      const full = path.join(dir, e.name);
      let mtimeMs = 0;
      try { mtimeMs = fs.statSync(full).mtimeMs; } catch { mtimeMs = 0; }
      return { full, name: e.name, mtimeMs };
    })
    .sort((a, b) => b.mtimeMs - a.mtimeMs)
    .slice(0, Math.max(0, limit));

  const docs = [];
  for (const f of files) {
    let trace;
    try { trace = JSON.parse(fs.readFileSync(f.full, 'utf8')); } catch { continue; }
    const r = summarizeRun(trace);
    if (!r || !r.goal) continue; // a trace with no goal carries no recall value

    const text = [
      `Goal: ${r.goal}`,
      `Outcome: ${r.outcome}${r.verdict ? ` (verdict: ${r.verdict})` : ''}`,
      `Agent: ${r.agent} · steps: ${r.steps} · gate: ${r.gateClean ? 'clean' : 'not clean'}`,
      r.toolsUsed.length ? `Tools used: ${r.toolsUsed.join(', ')}` : '',
      r.summary ? `Summary: ${r.summary}` : '',
    ].filter(Boolean).join('\n');

    docs.push({
      source: `forge/runs/${f.name}`,
      title: `Past run — ${r.agent} (${r.outcome}): ${r.goal}`.slice(0, 120),
      text,
      mtimeMs: f.mtimeMs,
    });
  }
  return docs;
}

function oneLine(s) {
  return String(s || '').replace(/\s+/g, ' ').trim().slice(0, 200);
}
