/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce or disallow parentheses when invoking a constructor with no arguments
 * @see https://eslint.org/docs/rules/new-parens
 *
 * @minItems 1
 */
export type NewParens =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never'];
