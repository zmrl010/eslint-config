
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoMultipleEmptyLines0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        max: number;
        maxEOF?: number;
        maxBOF?: number;
      }
    ];

export type NoMultipleEmptyLines = 'off' | NoMultipleEmptyLines0;
