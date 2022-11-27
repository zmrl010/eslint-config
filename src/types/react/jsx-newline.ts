
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxNewline0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        prevent?: boolean;
        allowMultilines?: boolean;
      }
    ];

export type JsxNewline = 'off' | JsxNewline0;
