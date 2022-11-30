/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce `<img>` alt prop does not contain the word "image", "picture", or "photo".
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/img-redundant-alt.md
 *
 * @minItems 1
 */
export type ImgRedundantAlt =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        components?: string[];
        words?: string[];
        [k: string]: unknown | undefined;
      }
    ];
