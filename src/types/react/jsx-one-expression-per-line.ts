
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type JsxOneExpressionPerLine = 'off' | JsxOneExpressionPerLine0;
