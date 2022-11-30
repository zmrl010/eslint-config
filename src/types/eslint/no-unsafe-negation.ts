/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow negating the left operand of relational operators
 * @see https://eslint.org/docs/rules/no-unsafe-negation
 *
 * @minItems 1
 */
export type NoUnsafeNegation =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        enforceForOrderingRelations?: boolean;
      }
    ];
