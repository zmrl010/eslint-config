/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type SortVars0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreCase?: boolean;
      }
    ];

/**
 * Require variables within the same declaration block to be sorted
 * @see https://eslint.org/docs/rules/sort-vars
 */
export type SortVars = 'off' | SortVars0;
