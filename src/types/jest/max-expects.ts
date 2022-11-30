/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforces a maximum number assertion calls in a test body
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/max-expects.md
 *
 * @minItems 1
 */
export type MaxExpects =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        max?: number;
      }
    ];
