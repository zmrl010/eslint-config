/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Prefer a default export if module exports a single name or multiple names.
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/prefer-default-export.md
 *
 * @minItems 1
 */
export type PreferDefaultExport =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        target?: 'single' | 'any';
      }
    ];
