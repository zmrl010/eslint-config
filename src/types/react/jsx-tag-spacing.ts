/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxTagSpacing0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        closingSlash?: 'always' | 'never' | 'allow';
        beforeSelfClosing?:
          | 'always'
          | 'proportional-always'
          | 'never'
          | 'allow';
        afterOpening?: 'always' | 'allow-multiline' | 'never' | 'allow';
        beforeClosing?: 'always' | 'proportional-always' | 'never' | 'allow';
      }
    ];

/**
 * Enforce whitespace in and around the JSX opening and closing brackets
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-tag-spacing.md
 */
export type JsxTagSpacing = 'off' | JsxTagSpacing0;
