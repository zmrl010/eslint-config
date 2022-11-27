
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type JsxSortProps = 'off' | JsxSortProps0;
