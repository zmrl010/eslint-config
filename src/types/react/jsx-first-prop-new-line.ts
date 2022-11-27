/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxFirstPropNewLine0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      'always' | 'never' | 'multiline' | 'multiline-multiprop'
    ];

/**
 * Enforce proper position of the first property in JSX
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-first-prop-new-line.md
 */
export type JsxFirstPropNewLine = 'off' | JsxFirstPropNewLine0;
