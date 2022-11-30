import { joinLines } from './text.js';

function escapeDocComment(val: string): string {
  return val.replace('*/', '*\\/');
}

/**
 * Generate a js doc comment string using input lines
 */
export function createDoc(...lines: string[]): string {
  if (lines.length === 0) {
    return '';
  }

  // prettier-ignore
  return joinLines(
    `/**`,
    ...lines.map((line) => 
    ` * ${escapeDocComment(line)}`),
    ` */`
  );
}
