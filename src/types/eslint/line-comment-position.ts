/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce position of line comments
 * @see https://eslint.org/docs/rules/line-comment-position
 *
 * @minItems 1
 */
export type LineCommentPosition =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | ('above' | 'beside')
        | {
            position?: 'above' | 'beside';
            ignorePattern?: string;
            applyDefaultPatterns?: boolean;
            applyDefaultIgnorePatterns?: boolean;
          }
      )
    ];
