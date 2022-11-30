/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require or disallow an empty line between class members
 * @see https://eslint.org/docs/rules/lines-between-class-members
 *
 * @minItems 1
 */
export type LinesBetweenClassMembers =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never']
  | [
      'off' | 'error' | 'warn',
      'always' | 'never',
      {
        exceptAfterSingleLine?: boolean;
      }
    ];
