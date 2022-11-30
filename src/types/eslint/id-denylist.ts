/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow specified identifiers
 * @see https://eslint.org/docs/rules/id-denylist
 *
 * @minItems 1
 */
export type IdDenylist =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', string];
