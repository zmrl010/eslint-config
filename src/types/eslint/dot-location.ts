/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type DotLocation0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'object' | 'property'];

/**
 * Enforce consistent newlines before and after dots
 * @see https://eslint.org/docs/rules/dot-location
 */
export type DotLocation = 'off' | DotLocation0;
