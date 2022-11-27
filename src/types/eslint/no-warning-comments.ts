/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoWarningComments0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        terms?: string[];
        location?: 'start' | 'anywhere';
        /**
         * @minItems 1
         */
        decoration?: [string, ...string[]];
      }
    ];

/**
 * Disallow specified warning terms in comments
 * @see https://eslint.org/docs/rules/no-warning-comments
 */
export type NoWarningComments = 'off' | NoWarningComments0;
