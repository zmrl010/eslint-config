/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow assignment operators in `return` statements
 * @see https://eslint.org/docs/rules/no-return-assign
 *
 * @minItems 1
 */
export type NoReturnAssign =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'except-parens' | 'always'];
