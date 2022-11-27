
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type LineCommentPosition = 'off' | LineCommentPosition0;
