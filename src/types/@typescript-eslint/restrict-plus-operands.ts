
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type RestrictPlusOperands0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * Whether to check compound assignments such as `+=`.
         */
        checkCompoundAssignments?: boolean;
        /**
         * Whether to allow `any` typed values.
         */
        allowAny?: boolean;
      }
    ];

export type RestrictPlusOperands = 'off' | RestrictPlusOperands0;
