/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type LinebreakStyle0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'unix' | 'windows'];

/**
 * Enforce consistent linebreak style
 * @see https://eslint.org/docs/rules/linebreak-style
 */
export type LinebreakStyle = 'off' | LinebreakStyle0;
