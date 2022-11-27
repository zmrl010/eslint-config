/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoMultiAssign0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreNonDeclaration?: boolean;
      }
    ];

/**
 * Disallow use of chained assignment expressions
 * @see https://eslint.org/docs/rules/no-multi-assign
 */
export type NoMultiAssign = 'off' | NoMultiAssign0;
