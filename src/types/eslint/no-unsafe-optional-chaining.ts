/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow use of optional chaining in contexts where the `undefined` value is not allowed
 * @see https://eslint.org/docs/rules/no-unsafe-optional-chaining
 *
 * @minItems 1
 */
export type NoUnsafeOptionalChaining =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        disallowArithmeticOperators?: boolean;
      }
    ];
