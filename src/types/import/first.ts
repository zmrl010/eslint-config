/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type First0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'absolute-first' | 'disable-absolute-first'];

/**
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/first.md
 */
export type First = 'off' | First0;
