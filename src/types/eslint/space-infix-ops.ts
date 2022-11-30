/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require spacing around infix operators
 * @see https://eslint.org/docs/rules/space-infix-ops
 *
 * @minItems 1
 */
export type SpaceInfixOps =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        int32Hint?: boolean;
      }
    ];
