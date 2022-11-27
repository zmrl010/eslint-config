/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PreferNullishCoalescing0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreConditionalTests?: boolean;
        ignoreTernaryTests?: boolean;
        ignoreMixedLogicalExpressions?: boolean;
      }
    ];

/**
 * Enforce using the nullish coalescing operator instead of logical chaining
 * @see https://typescript-eslint.io/rules/prefer-nullish-coalescing
 */
export type PreferNullishCoalescing = 'off' | PreferNullishCoalescing0;
