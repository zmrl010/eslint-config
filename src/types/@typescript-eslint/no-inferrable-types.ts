
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoInferrableTypes0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreParameters?: boolean;
        ignoreProperties?: boolean;
      }
    ];

export type NoInferrableTypes = 'off' | NoInferrableTypes0;
