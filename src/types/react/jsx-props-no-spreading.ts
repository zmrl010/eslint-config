/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxPropsNoSpreading0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        html?: 'enforce' | 'ignore';
        custom?: 'enforce' | 'ignore';
        exceptions?: string[];
        [k: string]: unknown;
      } & {
        [k: string]: unknown;
      }
    ];

/**
 * Disallow JSX prop spreading
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-spreading.md
 */
export type JsxPropsNoSpreading = 'off' | JsxPropsNoSpreading0;
