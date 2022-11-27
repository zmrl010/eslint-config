
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type AccessorPairs0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        getWithoutSet?: boolean;
        setWithoutGet?: boolean;
        enforceForClassMembers?: boolean;
      }
    ];

export type AccessorPairs = 'off' | AccessorPairs0;
