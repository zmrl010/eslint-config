/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type MultilineTernary0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'always-multiline' | 'never'];

/**
 * Enforce newlines between operands of ternary expressions
 * @see https://eslint.org/docs/rules/multiline-ternary
 */
export type MultilineTernary = 'off' | MultilineTernary0;
