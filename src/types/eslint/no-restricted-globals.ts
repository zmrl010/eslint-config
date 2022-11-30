/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow specified global variables
 * @see https://eslint.org/docs/rules/no-restricted-globals
 *
 * @minItems 1
 */
export type NoRestrictedGlobals =
  | 'off'
  | [
      'off' | 'error' | 'warn',
      ...(
        | string
        | {
            name: string;
            message?: string;
          }
      )[]
    ];
