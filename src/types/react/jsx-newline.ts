/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require or prevent a new line after jsx elements and expressions.
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-newline.md
 *
 * @minItems 1
 */
export type JsxNewline =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        prevent?: boolean;
        allowMultilines?: boolean;
      }
    ];
