
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ReturnAwait0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'in-try-catch' | 'always' | 'never'];

export type ReturnAwait = 'off' | ReturnAwait0;
