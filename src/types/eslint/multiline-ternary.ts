/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce newlines between operands of ternary expressions
 * @see https://eslint.org/docs/rules/multiline-ternary
 *
 * @minItems 1
 */
export type MultilineTernary =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'always-multiline' | 'never'];
