
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type PreferRegexLiterals = 'off' | PreferRegexLiterals0;
