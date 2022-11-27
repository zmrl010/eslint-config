/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ConsistentGenericConstructors0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'type-annotation' | 'constructor'];

/**
 * Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
 * @see https://typescript-eslint.io/rules/consistent-generic-constructors
 */
export type ConsistentGenericConstructors =
  | 'off'
  | ConsistentGenericConstructors0;
