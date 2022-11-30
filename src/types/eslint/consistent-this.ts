/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce consistent naming when capturing the current execution context
 * @see https://eslint.org/docs/rules/consistent-this
 *
 * @minItems 1
 */
export type ConsistentThis =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', string];
