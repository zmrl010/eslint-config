/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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

/**
 * Disallow problematic leaked values from being rendered
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-leaked-render.md
 */
export type JsxNoLeakedRender = 'off' | JsxNoLeakedRender0;
