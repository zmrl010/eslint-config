/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type SortPropTypes0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        requiredFirst?: boolean;
        callbacksLast?: boolean;
        ignoreCase?: boolean;
        noSortAlphabetically?: boolean;
        sortShapeProp?: boolean;
      }
    ];

/**
 * Enforce propTypes declarations alphabetical sorting
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-prop-types.md
 */
export type SortPropTypes = 'off' | SortPropTypes0;
