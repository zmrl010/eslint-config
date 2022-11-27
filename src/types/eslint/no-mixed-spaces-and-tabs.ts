/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoMixedSpacesAndTabs0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'smart-tabs' | true | false];

/**
 * Disallow mixed spaces and tabs for indentation
 * @see https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
 */
export type NoMixedSpacesAndTabs = 'off' | NoMixedSpacesAndTabs0;
