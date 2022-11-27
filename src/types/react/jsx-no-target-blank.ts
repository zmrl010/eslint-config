/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxNoTargetBlank0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowReferrer?: boolean;
        enforceDynamicLinks?: 'always' | 'never';
        warnOnSpreadAttributes?: boolean;
        links?: boolean;
        forms?: boolean;
      }
    ];

/**
 * Disallow `target="_blank"` attribute without `rel="noreferrer"`
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-target-blank.md
 */
export type JsxNoTargetBlank = 'off' | JsxNoTargetBlank0;
