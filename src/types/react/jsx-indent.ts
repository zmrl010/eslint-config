/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce JSX indentation
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-indent.md
 *
 * @minItems 1
 */
export type JsxIndent =
  | 'off'
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
