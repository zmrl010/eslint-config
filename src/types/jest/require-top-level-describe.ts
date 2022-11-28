/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type RequireTopLevelDescribe0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        maxNumberOfTopLevelDescribes?: number;
      }
    ];

/**
 * Require test cases and hooks to be inside a `describe` block
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/require-top-level-describe.md
 */
export type RequireTopLevelDescribe = 'off' | RequireTopLevelDescribe0;
