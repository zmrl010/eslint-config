/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow duplicate properties in JSX
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-duplicate-props.md
 *
 * @minItems 1
 */
export type JsxNoDuplicateProps =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreCase?: boolean;
      }
    ];
