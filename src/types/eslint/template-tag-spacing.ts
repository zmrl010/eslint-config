/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type TemplateTagSpacing0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never'];

/**
 * Require or disallow spacing between template tags and their literals
 * @see https://eslint.org/docs/rules/template-tag-spacing
 */
export type TemplateTagSpacing = 'off' | TemplateTagSpacing0;
