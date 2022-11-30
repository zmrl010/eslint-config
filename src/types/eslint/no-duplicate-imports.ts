/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow duplicate module imports
 * @see https://eslint.org/docs/rules/no-duplicate-imports
 *
 * @minItems 1
 */
export type NoDuplicateImports =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        includeExports?: boolean;
      }
    ];
