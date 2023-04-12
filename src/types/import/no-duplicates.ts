/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Forbid repeated import of the same module in multiple places.
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-duplicates.md
 *
 * @minItems 1
 */
export type NoDuplicates =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        considerQueryString?: boolean;
        'prefer-inline'?: boolean;
      }
    ];
