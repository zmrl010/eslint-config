/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxCurlyBracePresence0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            props?: 'always' | 'never' | 'ignore';
            children?: 'always' | 'never' | 'ignore';
            propElementValues?: 'always' | 'never' | 'ignore';
          }
        | ('always' | 'never' | 'ignore')
      )
    ];

/**
 * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-brace-presence.md
 */
export type JsxCurlyBracePresence = 'off' | JsxCurlyBracePresence0;
