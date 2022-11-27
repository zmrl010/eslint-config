
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoUnnecessaryBooleanLiteralCompare0 =
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

export type NoUnnecessaryBooleanLiteralCompare =
  | 'off'
  | NoUnnecessaryBooleanLiteralCompare0;
