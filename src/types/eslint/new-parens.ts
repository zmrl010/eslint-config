/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

type NewParens0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never'];

/**
 * Enforce or disallow parentheses when invoking a constructor with no arguments
 * @see https://eslint.org/docs/rules/new-parens
 */
export type NewParens = 'off' | NewParens0;
