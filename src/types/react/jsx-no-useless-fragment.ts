/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow unnecessary fragments
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-useless-fragment.md
 *
 * @minItems 1
 */
export type JsxNoUselessFragment =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowExpressions?: boolean;
        [k: string]: unknown | undefined;
      }
    ];
