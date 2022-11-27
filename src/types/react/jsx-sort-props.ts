/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxSortProps0 =
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

/**
 * Enforce props alphabetical sorting
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-props.md
 */
export type JsxSortProps = 'off' | JsxSortProps0;
