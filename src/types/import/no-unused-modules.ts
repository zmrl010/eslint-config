/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type NoUnusedModules =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            [k: string]: unknown | undefined;
          }
        | {
            [k: string]: unknown | undefined;
          }
        | {
            unusedExports: true;
            [k: string]: unknown | undefined;
          }
        | {
            missingExports: true;
            [k: string]: unknown | undefined;
          }
      )
    ];
