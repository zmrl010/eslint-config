import fs from 'fs';
import path from 'path';

/**
 * Synchronously write to a file
 * @param path path to file
 * @param data stringified data to write
 */
function writeFile(path: string, data: string): void {
  fs.writeFileSync(path, data, 'utf8');
}

export interface GeneratorConfig {
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
}

export type GeneratorOptions = Partial<GeneratorConfig>;

export function initConfig(options: GeneratorOptions = {}): GeneratorConfig {
  return {
    target: path.resolve(options.target ?? 'types/'),
    cwd: options.cwd ?? process.cwd(),
    writeFile: options.writeFile ?? writeFile,
  };
}
