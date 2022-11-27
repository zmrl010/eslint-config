/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type IdDenylist0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', string];

/**
 * Disallow specified identifiers
 * @see https://eslint.org/docs/rules/id-denylist
 */
export type IdDenylist = 'off' | IdDenylist0;
