/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type JsxIndentProps =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | ('tab' | 'first')
        | number
        | {
            indentMode?: ('tab' | 'first') | number;
            ignoreTernaryOperator?: boolean;
            [k: string]: unknown | undefined;
          }
      )
    ];
