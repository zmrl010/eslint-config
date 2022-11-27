
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type MultilineCommentStyle = 'off' | MultilineCommentStyle0;
