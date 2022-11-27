/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxIndentProps0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | ('tab' | 'first')
        | number
        | {
            indentMode?: ('tab' | 'first') | number;
            ignoreTernaryOperator?: boolean;
            [k: string]: unknown;
          }
      )
    ];

/**
 * Enforce props indentation in JSX
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-indent-props.md
 */
export type JsxIndentProps = 'off' | JsxIndentProps0;
