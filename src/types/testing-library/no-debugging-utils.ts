/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow the use of debugging utilities like `debug`
 * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-debugging-utils.md
 *
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
