/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoIrregularWhitespace0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        skipComments?: boolean;
        skipStrings?: boolean;
        skipTemplates?: boolean;
        skipRegExps?: boolean;
      }
    ];

/**
 * Disallow irregular whitespace
 * @see https://eslint.org/docs/rules/no-irregular-whitespace
 */
export type NoIrregularWhitespace = 'off' | NoIrregularWhitespace0;
