/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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

/**
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-unused-modules.md
 */
export type NoUnusedModules = 'off' | NoUnusedModules0;
