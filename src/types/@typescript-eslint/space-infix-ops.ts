
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type SpaceInfixOps0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        int32Hint?: boolean;
      }
    ];

export type SpaceInfixOps = 'off' | SpaceInfixOps0;
