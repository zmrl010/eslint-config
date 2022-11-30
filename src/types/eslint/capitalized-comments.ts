/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type CapitalizedComments =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never']
  | [
      'off' | 'error' | 'warn',
      'always' | 'never',
      (
        | {
            ignorePattern?: string;
            ignoreInlineComments?: boolean;
            ignoreConsecutiveComments?: boolean;
          }
        | {
            line?: {
              ignorePattern?: string;
              ignoreInlineComments?: boolean;
              ignoreConsecutiveComments?: boolean;
            };
            block?: {
              ignorePattern?: string;
              ignoreInlineComments?: boolean;
              ignoreConsecutiveComments?: boolean;
            };
          }
      )
    ];
