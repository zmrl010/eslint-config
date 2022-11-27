/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type LinesBetweenClassMembers0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never']
  | [
      'off' | 'error' | 'warn',
      'always' | 'never',
      {
        exceptAfterSingleLine?: boolean;
      }
    ];

/**
 * Require or disallow an empty line between class members
 * @see https://eslint.org/docs/rules/lines-between-class-members
 */
export type LinesBetweenClassMembers = 'off' | LinesBetweenClassMembers0;
