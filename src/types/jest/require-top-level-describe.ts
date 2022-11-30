/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require test cases and hooks to be inside a `describe` block
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/require-top-level-describe.md
 *
 * @minItems 1
 */
export type RequireTopLevelDescribe =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        maxNumberOfTopLevelDescribes?: number;
      }
    ];
