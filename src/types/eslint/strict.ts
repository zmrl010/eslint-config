/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require or disallow strict mode directives
 * @see https://eslint.org/docs/rules/strict
 *
 * @minItems 1
 */
export type Strict =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'never' | 'global' | 'function' | 'safe'];
