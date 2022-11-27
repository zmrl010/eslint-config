/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type OperatorAssignment0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never'];

/**
 * Require or disallow assignment operator shorthand where possible
 * @see https://eslint.org/docs/rules/operator-assignment
 */
export type OperatorAssignment = 'off' | OperatorAssignment0;
