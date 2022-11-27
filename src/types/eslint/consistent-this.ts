/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ConsistentThis0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', string];

/**
 * Enforce consistent naming when capturing the current execution context
 * @see https://eslint.org/docs/rules/consistent-this
 */
export type ConsistentThis = 'off' | ConsistentThis0;
