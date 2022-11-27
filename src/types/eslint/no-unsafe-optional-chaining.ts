
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type NoUnsafeOptionalChaining = 'off' | NoUnsafeOptionalChaining0;
