import fs from 'node:fs';
import path from 'node:path';

export class MemoryEventStore {
  constructor() { this.events = []; }
  append(event) { this.events.push(Object.freeze({ ...event })); return event; }
  list() { return [...this.events]; }
}

export class FileEventStore extends MemoryEventStore {
  constructor(file) { super(); this.file = path.resolve(file); }
  append(event) {
    super.append(event);
    fs.mkdirSync(path.dirname(this.file), { recursive: true });
    fs.appendFileSync(this.file, `${JSON.stringify(event)}\n`, 'utf8');
    return event;
  }
}

