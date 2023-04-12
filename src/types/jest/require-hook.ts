/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require setup and teardown code to be within a hook
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.2.1/docs/rules/require-hook.md
 *
 * @minItems 1
 */
export type RequireHook =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowedFunctionCalls?: string[];
      }
    ];
