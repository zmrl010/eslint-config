/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type TemplateCurlySpacing0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never'];

/**
 * Require or disallow spacing around embedded expressions of template strings
 * @see https://eslint.org/docs/rules/template-curly-spacing
 */
export type TemplateCurlySpacing = 'off' | TemplateCurlySpacing0;
