/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type RestrictPlusOperands =
  | 'off'
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
