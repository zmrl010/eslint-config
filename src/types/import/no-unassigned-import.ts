/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoUnassignedImport0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        devDependencies?: boolean | unknown[];
        optionalDependencies?: boolean | unknown[];
        peerDependencies?: boolean | unknown[];
        allow?: string[];
      }
    ];

/**
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-unassigned-import.md
 */
export type NoUnassignedImport = 'off' | NoUnassignedImport0;
