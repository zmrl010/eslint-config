/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type Radix0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'as-needed'];

/**
 * Enforce the consistent use of the radix argument when using `parseInt()`
 * @see https://eslint.org/docs/rules/radix
 */
export type Radix = 'off' | Radix0;
