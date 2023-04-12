/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Forbid potentially ambiguous parse goal (`script` vs. `module`).
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/unambiguous.md
 *
 * @minItems 1
 */
export type Unambiguous = 'off' | ['off' | 'error' | 'warn'];
