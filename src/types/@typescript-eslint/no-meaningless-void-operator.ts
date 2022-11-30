/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow the `void` operator except when used to discard a value
 * @see https://typescript-eslint.io/rules/no-meaningless-void-operator
 *
 * @minItems 1
 */
export type NoMeaninglessVoidOperator =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        checkNever?: boolean;
      }
    ];
