/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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

/**
 * Enforce consistent usage of type exports
 * @see https://typescript-eslint.io/rules/consistent-type-exports
 */
export type ConsistentTypeExports = 'off' | ConsistentTypeExports0;
