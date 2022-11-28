/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoStandaloneExpect0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        additionalTestBlockFunctions?: string[];
      }
    ];

/**
 * Disallow using `expect` outside of `it` or `test` blocks
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-standalone-expect.md
 */
export type NoStandaloneExpect = 'off' | NoStandaloneExpect0;
