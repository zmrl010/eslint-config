/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PreferConst0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        destructuring?: 'any' | 'all';
        ignoreReadBeforeAssign?: boolean;
      }
    ];

/**
 * Require `const` declarations for variables that are never reassigned after declared
 * @see https://eslint.org/docs/rules/prefer-const
 */
export type PreferConst = 'off' | PreferConst0;
