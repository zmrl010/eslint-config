/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce that literals on classes are exposed in a consistent style
 * @see https://typescript-eslint.io/rules/class-literal-property-style
 *
 * @minItems 1
 */
export type ClassLiteralPropertyStyle =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'fields' | 'getters'];
