/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type Strict0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'never' | 'global' | 'function' | 'safe'];

/**
 * Require or disallow strict mode directives
 * @see https://eslint.org/docs/rules/strict
 */
export type Strict = 'off' | Strict0;
