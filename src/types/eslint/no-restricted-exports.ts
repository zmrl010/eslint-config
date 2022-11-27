
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoRestrictedExports0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        restrictedNamedExports?: string[];
      }
    ];

export type NoRestrictedExports = 'off' | NoRestrictedExports0;
