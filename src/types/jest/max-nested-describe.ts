/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforces a maximum depth to nested describe calls
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.2.1/docs/rules/max-nested-describe.md
 *
 * @minItems 1
 */
export type MaxNestedDescribe =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        max?: number;
      }
    ];
