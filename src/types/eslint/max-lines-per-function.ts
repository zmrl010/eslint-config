/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type MaxLinesPerFunction =
  | 'off'
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
