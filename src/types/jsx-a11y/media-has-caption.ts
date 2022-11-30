/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions.
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/media-has-caption.md
 *
 * @minItems 1
 */
export type MediaHasCaption =
  | 'off'
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
