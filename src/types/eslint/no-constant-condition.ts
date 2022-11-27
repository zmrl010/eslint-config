
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoConstantCondition0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        checkLoops?: boolean;
      }
    ];

export type NoConstantCondition = 'off' | NoConstantCondition0;
