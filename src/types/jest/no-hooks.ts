/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoHooks0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allow?: unknown[];
      }
    ];

/**
 * Disallow setup and teardown hooks
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-hooks.md
 */
export type NoHooks = 'off' | NoHooks0;
