/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce a newline after import statements.
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/newline-after-import.md
 *
 * @minItems 1
 */
export type NewlineAfterImport =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        count?: number;
        considerComments?: boolean;
      }
    ];
