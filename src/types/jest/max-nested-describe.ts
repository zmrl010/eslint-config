/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type MaxNestedDescribe0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        max?: number;
      }
    ];

/**
 * Enforces a maximum depth to nested describe calls
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/max-nested-describe.md
 */
export type MaxNestedDescribe = 'off' | MaxNestedDescribe0;
