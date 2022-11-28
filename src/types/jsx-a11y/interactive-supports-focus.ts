/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type InteractiveSupportsFocus0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * @minItems 0
         */
        tabbable?: (
          | 'button'
          | 'checkbox'
          | 'columnheader'
          | 'combobox'
          | 'grid'
          | 'gridcell'
          | 'link'
          | 'listbox'
          | 'menu'
          | 'menubar'
          | 'menuitem'
          | 'menuitemcheckbox'
          | 'menuitemradio'
          | 'option'
          | 'progressbar'
          | 'radio'
          | 'radiogroup'
          | 'row'
          | 'rowheader'
          | 'scrollbar'
          | 'searchbox'
          | 'slider'
          | 'spinbutton'
          | 'switch'
          | 'tab'
          | 'tablist'
          | 'textbox'
          | 'tree'
          | 'treegrid'
          | 'treeitem'
          | 'doc-backlink'
          | 'doc-biblioref'
          | 'doc-glossref'
          | 'doc-noteref'
        )[];
        [k: string]: unknown;
      }
    ];

/**
 * Enforce that elements with interactive handlers like `onClick` must be focusable.
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/interactive-supports-focus.md
 */
export type InteractiveSupportsFocus = 'off' | InteractiveSupportsFocus0;
