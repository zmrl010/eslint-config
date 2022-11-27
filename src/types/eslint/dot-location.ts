
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type DotLocation0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'object' | 'property'];

export type DotLocation = 'off' | DotLocation0;
