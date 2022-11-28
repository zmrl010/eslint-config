/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ConsistentTestIt0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        fn?: 'it' | 'test';
        withinDescribe?: 'it' | 'test';
      }
    ];

/**
 * Enforce `test` and `it` usage conventions
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/consistent-test-it.md
 */
export type ConsistentTestIt = 'off' | ConsistentTestIt0;
