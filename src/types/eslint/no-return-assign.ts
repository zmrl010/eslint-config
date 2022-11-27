/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoReturnAssign0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'except-parens' | 'always'];

/**
 * Disallow assignment operators in `return` statements
 * @see https://eslint.org/docs/rules/no-return-assign
 */
export type NoReturnAssign = 'off' | NoReturnAssign0;
