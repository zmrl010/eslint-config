
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type JsxTagSpacing = 'off' | JsxTagSpacing0;
