/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow use of the `RegExp` constructor in favor of regular expression literals
 * @see https://eslint.org/docs/rules/prefer-regex-literals
 *
 * @minItems 1
 */
export type PreferRegexLiterals =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        disallowRedundantWrapping?: boolean;
      }
    ];
