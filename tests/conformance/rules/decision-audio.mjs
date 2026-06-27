// Rule: every recorded Government decision ships an audio summary.
// A "decision record" is government/decisions/<NNNN>-*.md (not README, not under resumo/).
// It must have a matching audio file under government/decisions/resumo/ whose name
// starts with the same NNNN id. This enforces the standing rule: every recorded
// council/discussion produces an audio summary.
import path from 'node:path';
export const id = 'decision-audio';
export const description = 'Every recorded Government decision has an audio summary in decisions/resumo/.';

const AUDIO = /\.(mp3|wav|m4a|ogg|opus|aac)$/i;

export default function check(ctx) {
  const { util, root } = ctx;
  const resumoDir = path.join(root, 'government', 'decisions', 'resumo');
  const records = ctx.mdFiles.filter((f) =>
    /^government\/decisions\/\d{4}-[^/]+\.md$/.test(util.rel(root, f))
  );
  const audios = util.exists(resumoDir) ? util.walk(resumoDir).map((p) => path.basename(p)) : [];
  const findings = [];
  for (const f of records) {
    const id4 = path.basename(f).slice(0, 4);
    if (!audios.some((a) => AUDIO.test(a) && a.startsWith(id4))) {
      findings.push({ file: f, msg: `decision ${id4} has no audio summary in government/decisions/resumo/ (mandatory)` });
    }
  }
  return findings;
}
