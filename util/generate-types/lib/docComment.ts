import { TSESLint } from '@typescript-eslint/utils';

/**
 * Generate a js doc comment string out of input lines.
 */
export function createDocComment(...lines: string[]): string {
  lines = lines.filter(Boolean);
  if (lines.length === 0) {
    return '';
  }
  const linesBlock = lines
    .map((line) => line.replace('*/', '*\\/'))
    .join('\n * ');
  return `/**\n * ${linesBlock}\n */`;
}

/**
 * Generate a js doc comment string out of a rule.
 */
export function createRuleDocComment(rule: {
  meta: TSESLint.RuleMetaData<string>;
}) {
  const { docs } = rule.meta;

  if (!docs) {
    return '';
  }

  const url = docs.url ? `@see ${docs.url}` : '';

  return createDocComment(docs.description, url);
}
