/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type QuotedExpressions0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never'];

/**
 * Enforces the presence or absence of quotes around expressions
 * @see https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/quoted-expressions.md
 */
export type QuotedExpressions = 'off' | QuotedExpressions0;
