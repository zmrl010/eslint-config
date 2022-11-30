/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow two overloads that could be unified into one with a union or an optional/rest parameter
 * @see https://typescript-eslint.io/rules/unified-signatures
 *
 * @minItems 1
 */
export type UnifiedSignatures =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * Whether two parameters with different names at the same index should be considered different even if their types are the same.
         */
        ignoreDifferentlyNamedParameters?: boolean;
      }
    ];
