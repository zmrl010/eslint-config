/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoUnnecessaryTypeAssertion0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * A list of type names to ignore.
         */
        typesToIgnore?: string[];
        [k: string]: unknown;
      }
    ];

/**
 * Disallow type assertions that do not change the type of an expression
 * @see https://typescript-eslint.io/rules/no-unnecessary-type-assertion
 */
export type NoUnnecessaryTypeAssertion = 'off' | NoUnnecessaryTypeAssertion0;
