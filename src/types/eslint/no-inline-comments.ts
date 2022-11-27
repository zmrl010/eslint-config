/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoInlineComments0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignorePattern?: string;
      }
    ];

/**
 * Disallow inline comments after code
 * @see https://eslint.org/docs/rules/no-inline-comments
 */
export type NoInlineComments = 'off' | NoInlineComments0;
