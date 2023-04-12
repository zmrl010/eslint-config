/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow using `expect` outside of `it` or `test` blocks
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.2.1/docs/rules/no-standalone-expect.md
 *
 * @minItems 1
 */
export type NoStandaloneExpect =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        additionalTestBlockFunctions?: string[];
      }
    ];
