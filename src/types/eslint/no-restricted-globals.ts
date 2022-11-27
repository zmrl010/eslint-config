/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoRestrictedGlobals0 = [
  'off' | 'error' | 'warn',
  ...(
    | string
    | {
        name: string;
        message?: string;
      }
  )[]
];

/**
 * Disallow specified global variables
 * @see https://eslint.org/docs/rules/no-restricted-globals
 */
export type NoRestrictedGlobals = 'off' | NoRestrictedGlobals0;
