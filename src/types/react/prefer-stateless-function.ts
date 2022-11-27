
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PreferStatelessFunction0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignorePureComponents?: boolean;
      }
    ];

export type PreferStatelessFunction = 'off' | PreferStatelessFunction0;
