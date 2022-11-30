/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce the consistent use of either double or single quotes in JSX attributes
 * @see https://eslint.org/docs/rules/jsx-quotes
 *
 * @minItems 1
 */
export type JsxQuotes =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'prefer-single' | 'prefer-double'];
