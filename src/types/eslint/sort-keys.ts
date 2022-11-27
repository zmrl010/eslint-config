
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type SortKeys = 'off' | SortKeys0;
