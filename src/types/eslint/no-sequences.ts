/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow comma operators
 * @see https://eslint.org/docs/rules/no-sequences
 *
 * @minItems 1
 */
export type NoSequences =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowInParentheses?: boolean;
      }
    ];
