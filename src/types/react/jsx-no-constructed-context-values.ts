/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallows JSX context provider values from taking values that will cause needless rerenders
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-constructed-context-values.md
 *
 * @minItems 1
 */
export type JsxNoConstructedContextValues =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', unknown];
