/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type SortKeys0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'asc' | 'desc']
  | [
      'off' | 'error' | 'warn',
      'asc' | 'desc',
      {
        caseSensitive?: boolean;
        natural?: boolean;
        minKeys?: number;
        allowLineSeparatedGroups?: boolean;
      }
    ];

/**
 * Require object keys to be sorted
 * @see https://eslint.org/docs/rules/sort-keys
 */
export type SortKeys = 'off' | SortKeys0;
