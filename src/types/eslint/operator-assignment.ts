/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require or disallow assignment operator shorthand where possible
 * @see https://eslint.org/docs/rules/operator-assignment
 *
 * @minItems 1
 */
export type OperatorAssignment =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never'];
