/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce the consistent use of the radix argument when using `parseInt()`
 * @see https://eslint.org/docs/rules/radix
 *
 * @minItems 1
 */
export type Radix =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'as-needed'];
