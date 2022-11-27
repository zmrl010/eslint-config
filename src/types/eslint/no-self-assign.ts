/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoSelfAssign0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        props?: boolean;
      }
    ];

/**
 * Disallow assignments where both sides are exactly the same
 * @see https://eslint.org/docs/rules/no-self-assign
 */
export type NoSelfAssign = 'off' | NoSelfAssign0;
