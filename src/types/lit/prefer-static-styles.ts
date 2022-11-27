/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PreferStaticStyles0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never'];

/**
 * Enforces the use of static styles in elements
 * @see https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/prefer-static-styles.md
 */
export type PreferStaticStyles = 'off' | PreferStaticStyles0;
