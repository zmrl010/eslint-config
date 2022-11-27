
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxNoLiterals0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        noStrings?: boolean;
        allowedStrings?: string[];
        ignoreProps?: boolean;
        noAttributeStrings?: boolean;
      }
    ];

export type JsxNoLiterals = 'off' | JsxNoLiterals0;
