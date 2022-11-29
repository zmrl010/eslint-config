/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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
        [k: string]: unknown | undefined;
      }
    ];

/**
 * Require `Array#sort` calls to always provide a `compareFunction`
 * @see https://typescript-eslint.io/rules/require-array-sort-compare
 */
export type RequireArraySortCompare = 'off' | RequireArraySortCompare0;
