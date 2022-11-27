
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type NoUnnecessaryTypeAssertion = 'off' | NoUnnecessaryTypeAssertion0;
