/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce assertion to be made in a test body
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.2.1/docs/rules/expect-expect.md
 *
 * @minItems 1
 */
export type ExpectExpect =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        assertFunctionNames?: [] | [string];
        additionalTestBlockFunctions?: string[];
      }
    ];
