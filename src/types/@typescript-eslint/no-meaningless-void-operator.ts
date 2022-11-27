/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoMeaninglessVoidOperator0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        checkNever?: boolean;
      }
    ];

/**
 * Disallow the `void` operator except when used to discard a value
 * @see https://typescript-eslint.io/rules/no-meaningless-void-operator
 */
export type NoMeaninglessVoidOperator = 'off' | NoMeaninglessVoidOperator0;
