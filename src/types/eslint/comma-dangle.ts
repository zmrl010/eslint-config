/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type CommaDangle0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | Value
        | {
            arrays?: ValueWithIgnore;
            objects?: ValueWithIgnore;
            imports?: ValueWithIgnore;
            exports?: ValueWithIgnore;
            functions?: ValueWithIgnore;
          }
      )
    ];
type Value = 'always-multiline' | 'always' | 'never' | 'only-multiline';
type ValueWithIgnore =
  | 'always-multiline'
  | 'always'
  | 'ignore'
  | 'never'
  | 'only-multiline';

/**
 * Require or disallow trailing commas
 * @see https://eslint.org/docs/rules/comma-dangle
 */
export type CommaDangle = 'off' | CommaDangle0;
