
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoWarningComments0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        terms?: string[];
        location?: 'start' | 'anywhere';
        /**
         * @minItems 1
         */
        decoration?: [string, ...string[]];
      }
    ];

export type NoWarningComments = 'off' | NoWarningComments0;
