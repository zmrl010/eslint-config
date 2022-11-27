/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxQuotes0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'prefer-single' | 'prefer-double'];

/**
 * Enforce the consistent use of either double or single quotes in JSX attributes
 * @see https://eslint.org/docs/rules/jsx-quotes
 */
export type JsxQuotes = 'off' | JsxQuotes0;
