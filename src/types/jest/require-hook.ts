/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type RequireHook0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowedFunctionCalls?: string[];
      }
    ];

/**
 * Require setup and teardown code to be within a hook
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/require-hook.md
 */
export type RequireHook = 'off' | RequireHook0;
