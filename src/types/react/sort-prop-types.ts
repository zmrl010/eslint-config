
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type SortPropTypes = 'off' | SortPropTypes0;
