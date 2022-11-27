
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type MaxLines0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | number
        | {
            max?: number;
            skipComments?: boolean;
            skipBlankLines?: boolean;
          }
      )
    ];

export type MaxLines = 'off' | MaxLines0;
