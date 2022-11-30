/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
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
