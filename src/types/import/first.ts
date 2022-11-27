
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type First0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'absolute-first' | 'disable-absolute-first'];

export type First = 'off' | First0;
