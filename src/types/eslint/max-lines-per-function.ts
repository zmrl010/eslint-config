
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type MaxLinesPerFunction0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            max?: number;
            skipComments?: boolean;
            skipBlankLines?: boolean;
            IIFEs?: boolean;
          }
        | number
      )
    ];

export type MaxLinesPerFunction = 'off' | MaxLinesPerFunction0;
