/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce `<a>` text to not exactly match "click here", "here", "link", or "a link".
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-ambiguous-text.md
 *
 * @minItems 1
 */
export type AnchorAmbiguousText =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        words?: string[];
        [k: string]: unknown | undefined;
      }
    ];
