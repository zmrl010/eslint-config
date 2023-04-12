/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow setup and teardown hooks
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.2.1/docs/rules/no-hooks.md
 *
 * @minItems 1
 */
export type NoHooks =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allow?: unknown[];
      }
    ];
