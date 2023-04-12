/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallows a set of attributes from being used in templates
 * @see https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/ban-attributes.md
 *
 * @minItems 1
 */
export type BanAttributes =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', string];
