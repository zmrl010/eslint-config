/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoUnsafeOptionalChaining0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        disallowArithmeticOperators?: boolean;
      }
    ];

/**
 * Disallow use of optional chaining in contexts where the `undefined` value is not allowed
 * @see https://eslint.org/docs/rules/no-unsafe-optional-chaining
 */
export type NoUnsafeOptionalChaining = 'off' | NoUnsafeOptionalChaining0;
