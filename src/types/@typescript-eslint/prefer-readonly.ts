
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PreferReadonly0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        onlyInlineLambdas?: boolean;
        [k: string]: unknown;
      }
    ];

export type PreferReadonly = 'off' | PreferReadonly0;
