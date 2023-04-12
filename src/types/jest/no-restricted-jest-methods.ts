/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow specific `jest.` methods
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.2.1/docs/rules/no-restricted-jest-methods.md
 *
 * @minItems 1
 */
export type NoRestrictedJestMethods =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        [k: string]: (string | null) | undefined;
      }
    ];
