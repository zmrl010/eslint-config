/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoSequences0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowInParentheses?: boolean;
      }
    ];

/**
 * Disallow comma operators
 * @see https://eslint.org/docs/rules/no-sequences
 */
export type NoSequences = 'off' | NoSequences0;
