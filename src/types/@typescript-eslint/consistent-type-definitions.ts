/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce type definitions to consistently use either `interface` or `type`
 * @see https://typescript-eslint.io/rules/consistent-type-definitions
 *
 * @minItems 1
 */
export type ConsistentTypeDefinitions =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'interface' | 'type'];
