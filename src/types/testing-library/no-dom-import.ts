/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoDomImport0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', string];

/**
 * Disallow importing from DOM Testing Library
 * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-dom-import.md
 */
export type NoDomImport = 'off' | NoDomImport0;
