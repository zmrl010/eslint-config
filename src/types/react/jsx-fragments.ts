/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxFragments0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'syntax' | 'element'];

/**
 * Enforce shorthand or standard form for React fragments
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-fragments.md
 */
export type JsxFragments = 'off' | JsxFragments0;
