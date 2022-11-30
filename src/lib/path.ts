import fs from 'fs';
import path from 'path';

/**
 * Resolve first existing path
 */
export function resolveFirstExisting(...paths: string[]): string | undefined {
  const filepath = paths.find((p) => fs.existsSync(p));
  if (!filepath) {
    return;
  }
  return path.resolve(filepath);
}
