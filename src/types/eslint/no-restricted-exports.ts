/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoRestrictedExports0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        restrictedNamedExports?: string[];
      }
    ];

/**
 * Disallow specified names in exports
 * @see https://eslint.org/docs/rules/no-restricted-exports
 */
export type NoRestrictedExports = 'off' | NoRestrictedExports0;
