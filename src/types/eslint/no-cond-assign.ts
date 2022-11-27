
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoCondAssign0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'except-parens' | 'always'];

export type NoCondAssign = 'off' | NoCondAssign0;
