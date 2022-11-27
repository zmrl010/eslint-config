
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoUnsafeNegation0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        enforceForOrderingRelations?: boolean;
      }
    ];

export type NoUnsafeNegation = 'off' | NoUnsafeNegation0;
