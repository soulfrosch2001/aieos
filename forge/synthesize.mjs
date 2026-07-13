#!/usr/bin/env node
// Generate auditable source provenance and the compact behavior contract.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { behaviorContract, capabilityMatrix, scanReferences } from './runtime/sources.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..');
const outDir = path.join(here, 'behavior');
const records = scanReferences(repoRoot);
const matrix = capabilityMatrix(records);
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'source-catalog.json'), JSON.stringify(records, null, 2) + '\n');
fs.writeFileSync(path.join(outDir, 'capability-matrix.json'), JSON.stringify(matrix, null, 2) + '\n');
fs.writeFileSync(path.join(outDir, 'contract.pt-br.md'), behaviorContract(matrix));
process.stdout.write(`Synthesized ${records.length} references into forge/behavior/.\n`);
