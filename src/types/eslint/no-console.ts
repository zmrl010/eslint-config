/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoConsole0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * @minItems 1
         */
        allow?: [string, ...string[]];
      }
    ];

/**
 * Disallow the use of `console`
 * @see https://eslint.org/docs/rules/no-console
 */
export type NoConsole = 'off' | NoConsole0;
