/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type HeadingHasContent0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        components?: string[];
        [k: string]: unknown;
      }
    ];

/**
 * Enforce heading (`h1`, `h2`, etc) elements contain accessible content.
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/heading-has-content.md
 */
export type HeadingHasContent = 'off' | HeadingHasContent0;
