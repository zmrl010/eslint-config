/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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

/**
 * Require both operands of addition to be the same type and be `bigint`, `number`, or `string`
 * @see https://typescript-eslint.io/rules/restrict-plus-operands
 */
export type RestrictPlusOperands = 'off' | RestrictPlusOperands0;
