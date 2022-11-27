
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxMaxPropsPerLine0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            maximum?: {
              single?: number;
              multi?: number;
              [k: string]: unknown;
            };
          }
        | {
            maximum?: number;
            when?: 'always' | 'multiline';
          }
      )
    ];

export type JsxMaxPropsPerLine = 'off' | JsxMaxPropsPerLine0;
