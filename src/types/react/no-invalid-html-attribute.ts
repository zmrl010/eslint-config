/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoInvalidHtmlAttribute0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'rel'[]];

/**
 * Disallow usage of invalid attributes
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-invalid-html-attribute.md
 */
export type NoInvalidHtmlAttribute = 'off' | NoInvalidHtmlAttribute0;
