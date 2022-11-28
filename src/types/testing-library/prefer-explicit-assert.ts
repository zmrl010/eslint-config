/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PreferExplicitAssert0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        assertion?: 'toBeInTheDocument' | 'toBeTruthy' | 'toBeDefined';
        includeFindQueries?: boolean;
      }
    ];

/**
 * Suggest using explicit assertions rather than standalone queries
 * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-explicit-assert.md
 */
export type PreferExplicitAssert = 'off' | PreferExplicitAssert0;
