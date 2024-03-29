/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce consistent newlines before and after dots
 * @see https://eslint.org/docs/rules/dot-location
 *
 * @minItems 1
 */
export type DotLocation =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'object' | 'property'];
