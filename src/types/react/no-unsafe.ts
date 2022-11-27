/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoUnsafe0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        checkAliases?: boolean;
      }
    ];

/**
 * Disallow usage of unsafe lifecycle methods
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unsafe.md
 */
export type NoUnsafe = 'off' | NoUnsafe0;
