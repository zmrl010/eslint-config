/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce maximum of props on a single line in JSX
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-props-per-line.md
 *
 * @minItems 1
 */
export type JsxMaxPropsPerLine =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            maximum?: {
              single?: number;
              multi?: number;
              [k: string]: unknown | undefined;
            };
          }
        | {
            maximum?: number;
            when?: 'always' | 'multiline';
          }
      )
    ];
