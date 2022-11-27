
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxIndent0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'tab' | number]
  | [
      'off' | 'error' | 'warn',
      'tab' | number,
      {
        checkAttributes?: boolean;
        indentLogicalExpressions?: boolean;
      }
    ];

export type JsxIndent = 'off' | JsxIndent0;
