
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type RequireAtomicUpdates0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowProperties?: boolean;
      }
    ];

export type RequireAtomicUpdates = 'off' | RequireAtomicUpdates0;
