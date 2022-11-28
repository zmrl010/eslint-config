/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type MaxExpects0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        max?: number;
      }
    ];

/**
 * Enforces a maximum number assertion calls in a test body
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/max-expects.md
 */
export type MaxExpects = 'off' | MaxExpects0;
