/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow usage of string literals in JSX
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-literals.md
 *
 * @minItems 1
 */
export type JsxNoLiterals =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        noStrings?: boolean;
        allowedStrings?: string[];
        ignoreProps?: boolean;
        noAttributeStrings?: boolean;
      }
    ];
