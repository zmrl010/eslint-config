
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type Strict0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'never' | 'global' | 'function' | 'safe'];

export type Strict = 'off' | Strict0;
