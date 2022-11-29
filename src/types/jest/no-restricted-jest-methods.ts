/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoRestrictedJestMethods0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        [k: string]: (string | null) | undefined;
      }
    ];

/**
 * Disallow specific `jest.` methods
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-restricted-jest-methods.md
 */
export type NoRestrictedJestMethods = 'off' | NoRestrictedJestMethods0;
