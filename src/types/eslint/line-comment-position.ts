/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type LineCommentPosition0 =
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

/**
 * Enforce position of line comments
 * @see https://eslint.org/docs/rules/line-comment-position
 */
export type LineCommentPosition = 'off' | LineCommentPosition0;
