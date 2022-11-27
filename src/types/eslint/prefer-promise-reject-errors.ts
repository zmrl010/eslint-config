/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PreferPromiseRejectErrors0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowEmptyReject?: boolean;
      }
    ];

/**
 * Require using Error objects as Promise rejection reasons
 * @see https://eslint.org/docs/rules/prefer-promise-reject-errors
 */
export type PreferPromiseRejectErrors = 'off' | PreferPromiseRejectErrors0;
