/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type FunctionCallArgumentNewline0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never' | 'consistent'];

/**
 * Enforce line breaks between arguments of a function call
 * @see https://eslint.org/docs/rules/function-call-argument-newline
 */
export type FunctionCallArgumentNewline = 'off' | FunctionCallArgumentNewline0;
