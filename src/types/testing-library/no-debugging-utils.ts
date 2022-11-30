/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type NoDebuggingUtils =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        utilsToCheckFor?: {
          prettyFormat?: boolean;
          logDOM?: boolean;
          logRoles?: boolean;
          prettyDOM?: boolean;
          logTestingPlaygroundURL?: boolean;
          debug?: boolean;
        };
      }
    ];
