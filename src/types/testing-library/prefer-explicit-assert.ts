/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Suggest using explicit assertions rather than standalone queries
 * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-explicit-assert.md
 *
 * @minItems 1
 */
export type PreferExplicitAssert =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        assertion?: 'toBeInTheDocument' | 'toBeTruthy' | 'toBeDefined';
        includeFindQueries?: boolean;
      }
    ];
