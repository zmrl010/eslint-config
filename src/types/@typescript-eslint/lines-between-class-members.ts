/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require or disallow an empty line between class members
 * @see https://typescript-eslint.io/rules/lines-between-class-members
 *
 * @minItems 1
 */
export type LinesBetweenClassMembers =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        [k: string]: unknown | undefined;
      }
    ];
