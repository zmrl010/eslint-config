
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type NoDuplicateImports = 'off' | NoDuplicateImports0;
