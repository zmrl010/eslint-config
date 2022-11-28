/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ExpectExpect0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        assertFunctionNames?: [] | [string];
        additionalTestBlockFunctions?: string[];
      }
    ];

/**
 * Enforce assertion to be made in a test body
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/expect-expect.md
 */
export type ExpectExpect = 'off' | ExpectExpect0;
