/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type UnicodeBom0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never'];

/**
 * Require or disallow Unicode byte order mark (BOM)
 * @see https://eslint.org/docs/rules/unicode-bom
 */
export type UnicodeBom = 'off' | UnicodeBom0;
