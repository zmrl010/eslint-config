/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow `target="_blank"` attribute without `rel="noreferrer"`
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-target-blank.md
 *
 * @minItems 1
 */
export type JsxNoTargetBlank =
  | 'off'
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
