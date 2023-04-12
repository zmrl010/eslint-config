/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce a particular style for multiline comments
 * @see https://eslint.org/docs/rules/multiline-comment-style
 */
export type MultilineCommentStyle =
  | 'off'
  | (
      | ['off' | 'error' | 'warn']
      | ['off' | 'error' | 'warn', 'starred-block' | 'bare-block']
      | ['off' | 'error' | 'warn']
      | ['off' | 'error' | 'warn', 'separate-lines']
      | [
          'off' | 'error' | 'warn',
          'separate-lines',
          {
            checkJSDoc?: boolean;
          }
        ]
    );
