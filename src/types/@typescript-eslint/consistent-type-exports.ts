
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ConsistentTypeExports0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        fixMixedExportsWithInlineTypeSpecifier?: boolean;
      }
    ];

export type ConsistentTypeExports = 'off' | ConsistentTypeExports0;
