/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type JsxTagSpacing =
  | 'off'
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
