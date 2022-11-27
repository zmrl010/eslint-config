/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ClassLiteralPropertyStyle0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'fields' | 'getters'];

/**
 * Enforce that literals on classes are exposed in a consistent style
 * @see https://typescript-eslint.io/rules/class-literal-property-style
 */
export type ClassLiteralPropertyStyle = 'off' | ClassLiteralPropertyStyle0;
