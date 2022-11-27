/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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

/**
 * Enforce maximum of props on a single line in JSX
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-props-per-line.md
 */
export type JsxMaxPropsPerLine = 'off' | JsxMaxPropsPerLine0;
