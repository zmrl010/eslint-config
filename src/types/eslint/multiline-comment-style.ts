/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type MultilineCommentStyle0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      'starred-block' | 'separate-lines' | 'bare-block'
    ];

/**
 * Enforce a particular style for multiline comments
 * @see https://eslint.org/docs/rules/multiline-comment-style
 */
export type MultilineCommentStyle = 'off' | MultilineCommentStyle0;
