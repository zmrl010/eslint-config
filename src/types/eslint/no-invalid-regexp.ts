/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoInvalidRegexp0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowConstructorFlags?: string[];
      }
    ];

/**
 * Disallow invalid regular expression strings in `RegExp` constructors
 * @see https://eslint.org/docs/rules/no-invalid-regexp
 */
export type NoInvalidRegexp = 'off' | NoInvalidRegexp0;
