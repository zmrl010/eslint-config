/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * `tabIndex` should only be declared on interactive elements.
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-tabindex.md
 *
 * @minItems 1
 */
export type NoNoninteractiveTabindex =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * An array of ARIA roles
         */
        roles?: string[];
        /**
         * An array of HTML tag names
         */
        tags?: string[];
        [k: string]: unknown | undefined;
      }
    ];
