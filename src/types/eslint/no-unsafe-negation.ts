/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoUnsafeNegation0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        enforceForOrderingRelations?: boolean;
      }
    ];

/**
 * Disallow negating the left operand of relational operators
 * @see https://eslint.org/docs/rules/no-unsafe-negation
 */
export type NoUnsafeNegation = 'off' | NoUnsafeNegation0;
