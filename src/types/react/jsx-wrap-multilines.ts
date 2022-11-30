/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow missing parentheses around multiline JSX
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-wrap-multilines.md
 *
 * @minItems 1
 */
export type JsxWrapMultilines =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        declaration?: true | false | 'ignore' | 'parens' | 'parens-new-line';
        assignment?: true | false | 'ignore' | 'parens' | 'parens-new-line';
        return?: true | false | 'ignore' | 'parens' | 'parens-new-line';
        arrow?: true | false | 'ignore' | 'parens' | 'parens-new-line';
        condition?: true | false | 'ignore' | 'parens' | 'parens-new-line';
        logical?: true | false | 'ignore' | 'parens' | 'parens-new-line';
        prop?: true | false | 'ignore' | 'parens' | 'parens-new-line';
      }
    ];
