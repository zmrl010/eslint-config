/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type SpaceInfixOps0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        int32Hint?: boolean;
      }
    ];

/**
 * Require spacing around infix operators
 * @see https://typescript-eslint.io/rules/space-infix-ops
 */
export type SpaceInfixOps = 'off' | SpaceInfixOps0;
