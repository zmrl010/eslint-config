/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoTrailingSpaces0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        skipBlankLines?: boolean;
        ignoreComments?: boolean;
      }
    ];

/**
 * Disallow trailing whitespace at the end of lines
 * @see https://eslint.org/docs/rules/no-trailing-spaces
 */
export type NoTrailingSpaces = 'off' | NoTrailingSpaces0;
