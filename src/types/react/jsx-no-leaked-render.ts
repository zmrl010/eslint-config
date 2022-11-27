
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxNoLeakedRender0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        validStrategies?: ('ternary' | 'coerce')[];
      }
    ];

export type JsxNoLeakedRender = 'off' | JsxNoLeakedRender0;
