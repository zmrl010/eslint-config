
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type RequireArraySortCompare0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * Whether to ignore arrays in which all elements are strings.
         */
        ignoreStringArrays?: boolean;
        [k: string]: unknown;
      }
    ];

export type RequireArraySortCompare = 'off' | RequireArraySortCompare0;
