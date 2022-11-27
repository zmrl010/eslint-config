/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxOneExpressionPerLine0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allow?: 'none' | 'literal' | 'single-child';
      }
    ];

/**
 * Require one JSX element per line
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-one-expression-per-line.md
 */
export type JsxOneExpressionPerLine = 'off' | JsxOneExpressionPerLine0;
