/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type NoUnnecessaryBooleanLiteralCompare =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * Whether to allow comparisons between nullable boolean variables and `true`.
         */
        allowComparingNullableBooleansToTrue?: boolean;
        /**
         * Whether to allow comparisons between nullable boolean variables and `false`.
         */
        allowComparingNullableBooleansToFalse?: boolean;
      }
    ];
