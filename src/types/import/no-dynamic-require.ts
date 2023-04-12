/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Forbid `require()` calls with expressions.
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-dynamic-require.md
 *
 * @minItems 1
 */
export type NoDynamicRequire =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        esmodule?: boolean;
      }
    ];
