
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoGlobalAssign0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        exceptions?: string[];
      }
    ];

export type NoGlobalAssign = 'off' | NoGlobalAssign0;
