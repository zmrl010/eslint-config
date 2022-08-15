import fs from 'fs';
import path from 'path';

/**
 * Resolve first existing path
 */
export function resolveFirst(...paths: string[]): string | undefined {
  const filepath = paths.find((p) => fs.existsSync(p));

  return filepath ? path.resolve(filepath) : undefined;
}
