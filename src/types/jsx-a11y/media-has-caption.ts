/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type MediaHasCaption0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        audio?: string[];
        video?: string[];
        track?: string[];
        [k: string]: unknown | undefined;
      }
    ];

/**
 * Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions.
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/media-has-caption.md
 */
export type MediaHasCaption = 'off' | MediaHasCaption0;
