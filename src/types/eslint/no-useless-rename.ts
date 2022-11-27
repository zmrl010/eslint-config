/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoUselessRename0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreDestructuring?: boolean;
        ignoreImport?: boolean;
        ignoreExport?: boolean;
      }
    ];

/**
 * Disallow renaming import, export, and destructured assignments to the same name
 * @see https://eslint.org/docs/rules/no-useless-rename
 */
export type NoUselessRename = 'off' | NoUselessRename0;
