/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce or ban the use of inline type-only markers for named imports.
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/consistent-type-specifier-style.md
 *
 * @minItems 1
 */
export type ConsistentTypeSpecifierStyle =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'prefer-inline' | 'prefer-top-level'];
