/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require or disallow Unicode byte order mark (BOM)
 * @see https://eslint.org/docs/rules/unicode-bom
 *
 * @minItems 1
 */
export type UnicodeBom =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never'];
