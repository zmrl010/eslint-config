/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require variables within the same declaration block to be sorted
 * @see https://eslint.org/docs/rules/sort-vars
 *
 * @minItems 1
 */
export type SortVars =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreCase?: boolean;
      }
    ];
