/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxNoBind0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowArrowFunctions?: boolean;
        allowBind?: boolean;
        allowFunctions?: boolean;
        ignoreRefs?: boolean;
        ignoreDOMComponents?: boolean;
      }
    ];

/**
 * Disallow `.bind()` or arrow functions in JSX props
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-bind.md
 */
export type JsxNoBind = 'off' | JsxNoBind0;
