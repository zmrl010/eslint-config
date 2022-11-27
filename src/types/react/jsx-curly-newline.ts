/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxCurlyNewline0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | ('consistent' | 'never')
        | {
            singleline?: 'consistent' | 'require' | 'forbid';
            multiline?: 'consistent' | 'require' | 'forbid';
          }
      )
    ];

/**
 * Enforce consistent linebreaks in curly braces in JSX attributes and expressions
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-newline.md
 */
export type JsxCurlyNewline = 'off' | JsxCurlyNewline0;
