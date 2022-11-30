/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce comparing `typeof` expressions against valid strings
 * @see https://eslint.org/docs/rules/valid-typeof
 *
 * @minItems 1
 */
export type ValidTypeof =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        requireStringLiterals?: boolean;
      }
    ];
