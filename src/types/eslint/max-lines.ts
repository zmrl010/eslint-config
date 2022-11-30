/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce a maximum number of lines per file
 * @see https://eslint.org/docs/rules/max-lines
 *
 * @minItems 1
 */
export type MaxLines =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | number
        | {
            max?: number;
            skipComments?: boolean;
            skipBlankLines?: boolean;
          }
      )
    ];
