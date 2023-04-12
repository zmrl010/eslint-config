/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Forbid unassigned imports
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-unassigned-import.md
 *
 * @minItems 1
 */
export type NoUnassignedImport =
  | 'off'
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
