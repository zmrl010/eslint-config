/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow assignments to native objects or read-only global variables
 * @see https://eslint.org/docs/rules/no-global-assign
 *
 * @minItems 1
 */
export type NoGlobalAssign =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        exceptions?: string[];
      }
    ];
