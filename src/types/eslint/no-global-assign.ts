/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoGlobalAssign0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        exceptions?: string[];
      }
    ];

/**
 * Disallow assignments to native objects or read-only global variables
 * @see https://eslint.org/docs/rules/no-global-assign
 */
export type NoGlobalAssign = 'off' | NoGlobalAssign0;
