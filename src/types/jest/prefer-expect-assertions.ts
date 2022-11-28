/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PreferExpectAssertions0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        onlyFunctionsWithAsyncKeyword?: boolean;
        onlyFunctionsWithExpectInLoop?: boolean;
        onlyFunctionsWithExpectInCallback?: boolean;
      }
    ];

/**
 * Suggest using `expect.assertions()` OR `expect.hasAssertions()`
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/prefer-expect-assertions.md
 */
export type PreferExpectAssertions = 'off' | PreferExpectAssertions0;
