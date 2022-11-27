
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type UnicodeBom0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never'];

export type UnicodeBom = 'off' | UnicodeBom0;
