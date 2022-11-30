/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce img alt attribute does not contain the word image, picture, or photo.
 * @see https://github.com/open-wc/open-wc/blob/master/packages/eslint-plugin-lit-a11y/docs/rules/img-redundant-alt.md
 *
 * @minItems 1
 */
export type ImgRedundantAlt =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        [k: string]: unknown | undefined;
      }
    ];
