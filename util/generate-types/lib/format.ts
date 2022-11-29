import { format, Options } from 'prettier';
import prettierConfig from '../../../.prettierrc.json' assert { type: 'json' };

export { prettierConfig };

const DEFAULT_OPTIONS = {
  ...prettierConfig,
  parser: 'typescript',
};

/**
 * format text with prettier
 * @param source - text to transform
 * @param options - additional options to be merged with
 * default config before formatting text
 *
 * default parser is `typescript`
 */
export function formatText(source: string, options?: Options) {
  return format(source, {
    ...DEFAULT_OPTIONS,
    ...options,
  });
}

/**
 * transform casing of text to PascalCase
 */
export function toPascalCase(name: string): string {
  const camel = name
    .replace(/(-\w)/gu, (m) => m[1].toUpperCase())
    .replace(/^(@\w)/u, (m) => m[1].toUpperCase())
    .replace(/\/./u, (s) => s[1].toUpperCase());
  const pascal = camel[0].toUpperCase() + camel.slice(1);

  return pascal;
}
