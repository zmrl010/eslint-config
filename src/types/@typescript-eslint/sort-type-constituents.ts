/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type SortTypeConstituents0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * Whether to check intersection types.
         */
        checkIntersections?: boolean;
        /**
         * Whether to check union types.
         */
        checkUnions?: boolean;
        /**
         * Ordering of the groups.
         */
        groupOrder?: (
          | 'conditional'
          | 'function'
          | 'import'
          | 'intersection'
          | 'keyword'
          | 'nullish'
          | 'literal'
          | 'named'
          | 'object'
          | 'operator'
          | 'tuple'
          | 'union'
        )[];
        [k: string]: unknown | undefined;
      }
    ];

/**
 * Enforce constituents of a type union/intersection to be sorted alphabetically
 * @see https://typescript-eslint.io/rules/sort-type-constituents
 */
export type SortTypeConstituents = 'off' | SortTypeConstituents0;
