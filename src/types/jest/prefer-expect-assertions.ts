/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Suggest using `expect.assertions()` OR `expect.hasAssertions()`
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/prefer-expect-assertions.md
 *
 * @minItems 1
 */
export type PreferExpectAssertions =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        onlyFunctionsWithAsyncKeyword?: boolean;
        onlyFunctionsWithExpectInLoop?: boolean;
        onlyFunctionsWithExpectInCallback?: boolean;
      }
    ];
