
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type PreferPromiseRejectErrors = 'off' | PreferPromiseRejectErrors0;
