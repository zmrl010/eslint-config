/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce a maximum number of lines of code in a function
 * @see https://eslint.org/docs/rules/max-lines-per-function
 *
 * @minItems 1
 */
export type MaxLinesPerFunction =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            max?: number;
            skipComments?: boolean;
            skipBlankLines?: boolean;
            IIFEs?: boolean;
          }
        | number
      )
    ];
