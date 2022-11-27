
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoEmptyInterface0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowSingleExtends?: boolean;
      }
    ];

export type NoEmptyInterface = 'off' | NoEmptyInterface0;
