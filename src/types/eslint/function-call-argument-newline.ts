
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type FunctionCallArgumentNewline0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never' | 'consistent'];

export type FunctionCallArgumentNewline = 'off' | FunctionCallArgumentNewline0;
