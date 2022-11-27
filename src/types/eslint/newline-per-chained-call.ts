
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NewlinePerChainedCall0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreChainWithDepth?: number;
      }
    ];

export type NewlinePerChainedCall = 'off' | NewlinePerChainedCall0;
