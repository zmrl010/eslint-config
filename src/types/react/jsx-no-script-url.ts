/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxNoScriptUrl0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        name: string;
        props: string[];
      }[]
    ];

/**
 * Disallow usage of `javascript:` URLs
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-script-url.md
 */
export type JsxNoScriptUrl = 'off' | JsxNoScriptUrl0;
