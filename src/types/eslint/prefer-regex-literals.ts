/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PreferRegexLiterals0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        disallowRedundantWrapping?: boolean;
      }
    ];

/**
 * Disallow use of the `RegExp` constructor in favor of regular expression literals
 * @see https://eslint.org/docs/rules/prefer-regex-literals
 */
export type PreferRegexLiterals = 'off' | PreferRegexLiterals0;
