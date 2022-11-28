/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type AutocompleteValid0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        inputComponents?: string[];
        [k: string]: unknown;
      }
    ];

/**
 * Enforce that autocomplete attributes are used correctly.
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/autocomplete-valid.md
 */
export type AutocompleteValid = 'off' | AutocompleteValid0;
