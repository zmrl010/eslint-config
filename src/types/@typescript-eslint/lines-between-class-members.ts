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
  | [
      'off' | 'error' | 'warn',
      {
        [k: string]: unknown;
      }
    ];

/**
 * Require or disallow an empty line between class members
 * @see https://typescript-eslint.io/rules/lines-between-class-members
 */
export type LinesBetweenClassMembers = 'off' | LinesBetweenClassMembers0;
