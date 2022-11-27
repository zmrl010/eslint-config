/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ConsistentTypeDefinitions0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'interface' | 'type'];

/**
 * Enforce type definitions to consistently use either `interface` or `type`
 * @see https://typescript-eslint.io/rules/consistent-type-definitions
 */
export type ConsistentTypeDefinitions = 'off' | ConsistentTypeDefinitions0;
