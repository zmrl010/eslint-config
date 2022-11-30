/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce a particular style for multiline comments
 * @see https://eslint.org/docs/rules/multiline-comment-style
 *
 * @minItems 1
 */
export type MultilineCommentStyle =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      'starred-block' | 'separate-lines' | 'bare-block'
    ];
