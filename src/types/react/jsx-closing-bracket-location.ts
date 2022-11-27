/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxClosingBracketLocation0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | ('after-props' | 'props-aligned' | 'tag-aligned' | 'line-aligned')
        | {
            location?:
              | 'after-props'
              | 'props-aligned'
              | 'tag-aligned'
              | 'line-aligned';
          }
        | {
            nonEmpty?:
              | 'after-props'
              | 'props-aligned'
              | 'tag-aligned'
              | 'line-aligned'
              | false;
            selfClosing?:
              | 'after-props'
              | 'props-aligned'
              | 'tag-aligned'
              | 'line-aligned'
              | false;
          }
      )
    ];

/**
 * Enforce closing bracket location in JSX
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-closing-bracket-location.md
 */
export type JsxClosingBracketLocation = 'off' | JsxClosingBracketLocation0;
