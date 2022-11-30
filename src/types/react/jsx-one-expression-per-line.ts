/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require one JSX element per line
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-one-expression-per-line.md
 *
 * @minItems 1
 */
export type JsxOneExpressionPerLine =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allow?: 'none' | 'literal' | 'single-child';
      }
    ];
