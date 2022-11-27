/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoDuplicateImports0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        includeExports?: boolean;
      }
    ];

/**
 * Disallow duplicate module imports
 * @see https://eslint.org/docs/rules/no-duplicate-imports
 */
export type NoDuplicateImports = 'off' | NoDuplicateImports0;
