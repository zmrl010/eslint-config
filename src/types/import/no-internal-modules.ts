/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Forbid importing the submodules of other modules.
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-internal-modules.md
 *
 * @minItems 1
 */
export type NoInternalModules =
  | 'off'
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
