/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce proper position of the first property in JSX
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-first-prop-new-line.md
 *
 * @minItems 1
 */
export type JsxFirstPropNewLine =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      'always' | 'never' | 'multiline' | 'multiline-multiprop'
    ];
