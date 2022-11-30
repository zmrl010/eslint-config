import fs from 'fs';
import path from 'path';
import { createDoc } from './doc.js';

const AUTO_GENERATED_NOTE = createDoc(
  'THIS FILE IS AUTO-GENERATED.',
  'DO NOT MODIFY IT MANUALLY',
  'RUN `pnpm generate:types` TO REGENERATE IT.'
);

/**
 * Synchronously write to a file
 * @param path path to file
 * @param data stringified data to write
 */
function writeFile(path: string, data: string): void {
  fs.writeFileSync(path, data, 'utf8');
}

/**
 * Context holding references to resolved configuration and functions
 */
export interface GeneratorContext {
  /**
   * Target directory to write type files
   *
   * @default
   * 'types/'
   */
  target: string;
  /**
   * Current working directory to start from
   *
   * @default
   * process.cwd()
   */
  cwd: string;
  /**
   * Function to handle writing data to a file
   */
  writeFile: (filepath: string, data: string) => void;
  /**
   * Note prepended to generated files
   *
   * @default
   */
  autoGeneratedNote: string;
}

export type GeneratorOptions = Partial<GeneratorContext>;

/**
 * Resolve options into a complete context
 */
export function setupContext(options: GeneratorOptions = {}): GeneratorContext {
  const { cwd = process.cwd() } = options;

  if (cwd !== process.cwd()) {
    process.chdir(cwd);
  }

  return {
    cwd,
    target: path.resolve(options.target ?? 'types/'),
    writeFile: options.writeFile ?? writeFile,
    autoGeneratedNote: options.autoGeneratedNote ?? AUTO_GENERATED_NOTE,
  };
}