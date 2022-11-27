
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoUnusedModules0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            [k: string]: unknown;
          }
        | {
            [k: string]: unknown;
          }
        | {
            unusedExports: true;
            [k: string]: unknown;
          }
        | {
            missingExports: true;
            [k: string]: unknown;
          }
      )
    ];

export type NoUnusedModules = 'off' | NoUnusedModules0;
