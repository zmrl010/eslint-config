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
            enums?: ValueWithIgnore;
            generics?: ValueWithIgnore;
            tuples?: ValueWithIgnore;
          }
      )
    ];
type Value = 'always-multiline' | 'always' | 'never' | 'only-multiline';
type ValueWithIgnore =
  | 'always-multiline'
  | 'always'
  | 'never'
  | 'only-multiline'
  | 'ignore';

/**
 * Require or disallow trailing commas
 * @see https://typescript-eslint.io/rules/comma-dangle
 */
export type CommaDangle = 'off' | CommaDangle0;
