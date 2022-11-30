/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce props alphabetical sorting
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-props.md
 *
 * @minItems 1
 */
export type JsxSortProps =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        callbacksLast?: boolean;
        shorthandFirst?: boolean;
        shorthandLast?: boolean;
        multiline?: 'ignore' | 'first' | 'last';
        ignoreCase?: boolean;
        noSortAlphabetically?: boolean;
        reservedFirst?: unknown[] | boolean;
        locale?: string;
      }
    ];
