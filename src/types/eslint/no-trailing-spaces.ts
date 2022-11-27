
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoTrailingSpaces0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        skipBlankLines?: boolean;
        ignoreComments?: boolean;
      }
    ];

export type NoTrailingSpaces = 'off' | NoTrailingSpaces0;
