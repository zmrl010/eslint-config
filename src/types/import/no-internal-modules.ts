
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoInternalModules0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            allow?: string[];
          }
        | {
            forbid?: string[];
          }
      )
    ];

export type NoInternalModules = 'off' | NoInternalModules0;
