
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type UnifiedSignatures0 =
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

export type UnifiedSignatures = 'off' | UnifiedSignatures0;
