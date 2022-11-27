/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoCondAssign0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'except-parens' | 'always'];

/**
 * Disallow assignment operators in conditional expressions
 * @see https://eslint.org/docs/rules/no-cond-assign
 */
export type NoCondAssign = 'off' | NoCondAssign0;
