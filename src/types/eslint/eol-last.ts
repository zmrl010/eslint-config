/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type EolLast0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never' | 'unix' | 'windows'];

/**
 * Require or disallow newline at the end of files
 * @see https://eslint.org/docs/rules/eol-last
 */
export type EolLast = 'off' | EolLast0;
