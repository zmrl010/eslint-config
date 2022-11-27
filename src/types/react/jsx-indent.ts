/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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

/**
 * Enforce JSX indentation
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-indent.md
 */
export type JsxIndent = 'off' | JsxIndent0;
