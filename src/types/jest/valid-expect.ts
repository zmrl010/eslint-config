/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce valid `expect()` usage
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/valid-expect.md
 *
 * @minItems 1
 */
export type ValidExpect =
  | 'off'
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
