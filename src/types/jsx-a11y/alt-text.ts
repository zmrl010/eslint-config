/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce all elements that require alternative text have meaningful information to relay back to end user.
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/alt-text.md
 *
 * @minItems 1
 */
export type AltText =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        elements?: string[];
        img?: string[];
        object?: string[];
        area?: string[];
        'input[type="image"]'?: string[];
        [k: string]: unknown | undefined;
      }
    ];
