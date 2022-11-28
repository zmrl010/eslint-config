/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ValidExpect0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        alwaysAwait?: boolean;
        asyncMatchers?: string[];
        minArgs?: number;
        maxArgs?: number;
      }
    ];

/**
 * Enforce valid `expect()` usage
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/valid-expect.md
 */
export type ValidExpect = 'off' | ValidExpect0;
