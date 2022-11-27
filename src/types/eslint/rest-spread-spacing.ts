/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type RestSpreadSpacing0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never'];

/**
 * Enforce spacing between rest and spread operators and their expressions
 * @see https://eslint.org/docs/rules/rest-spread-spacing
 */
export type RestSpreadSpacing = 'off' | RestSpreadSpacing0;
