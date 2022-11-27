/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ValidTypeof0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        requireStringLiterals?: boolean;
      }
    ];

/**
 * Enforce comparing `typeof` expressions against valid strings
 * @see https://eslint.org/docs/rules/valid-typeof
 */
export type ValidTypeof = 'off' | ValidTypeof0;
