/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type FunctionParenNewline0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | (
            | 'always'
            | 'never'
            | 'consistent'
            | 'multiline'
            | 'multiline-arguments'
          )
        | {
            minItems?: number;
          }
      )
    ];

/**
 * Enforce consistent line breaks inside function parentheses
 * @see https://eslint.org/docs/rules/function-paren-newline
 */
export type FunctionParenNewline = 'off' | FunctionParenNewline0;
