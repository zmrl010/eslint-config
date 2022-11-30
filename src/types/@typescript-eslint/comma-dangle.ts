/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type CommaDangle =
  | 'off'
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
export type Value = 'always-multiline' | 'always' | 'never' | 'only-multiline';
export type ValueWithIgnore =
  | 'always-multiline'
  | 'always'
  | 'never'
  | 'only-multiline'
  | 'ignore';
