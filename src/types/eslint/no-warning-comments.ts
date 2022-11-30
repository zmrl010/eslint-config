/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type NoWarningComments =
  | 'off'
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
