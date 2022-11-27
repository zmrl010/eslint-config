/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type SemiStyle0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'last' | 'first'];

/**
 * Enforce location of semicolons
 * @see https://eslint.org/docs/rules/semi-style
 */
export type SemiStyle = 'off' | SemiStyle0;
