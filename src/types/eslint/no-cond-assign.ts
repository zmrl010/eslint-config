/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow assignment operators in conditional expressions
 * @see https://eslint.org/docs/rules/no-cond-assign
 *
 * @minItems 1
 */
export type NoCondAssign =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'except-parens' | 'always'];
