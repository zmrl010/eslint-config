/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow usage of `javascript:` URLs
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-script-url.md
 *
 * @minItems 1
 */
export type JsxNoScriptUrl =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        name: string;
        props: string[];
      }[]
    ];
