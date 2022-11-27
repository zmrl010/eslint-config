
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxNoUndef0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowGlobals?: boolean;
      }
    ];

export type JsxNoUndef = 'off' | JsxNoUndef0;
