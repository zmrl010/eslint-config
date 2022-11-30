/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
 * @see https://typescript-eslint.io/rules/consistent-generic-constructors
 *
 * @minItems 1
 */
export type ConsistentGenericConstructors =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'type-annotation' | 'constructor'];
