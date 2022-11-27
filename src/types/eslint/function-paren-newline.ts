
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type FunctionParenNewline = 'off' | FunctionParenNewline0;
