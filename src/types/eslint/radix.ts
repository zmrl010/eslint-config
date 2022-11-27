
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type Radix0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'as-needed'];

export type Radix = 'off' | Radix0;
