
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoPlusplus0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowForLoopAfterthoughts?: boolean;
      }
    ];

export type NoPlusplus = 'off' | NoPlusplus0;
