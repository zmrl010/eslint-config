/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require or disallow newline at the end of files
 * @see https://eslint.org/docs/rules/eol-last
 *
 * @minItems 1
 */
export type EolLast =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never' | 'unix' | 'windows'];
