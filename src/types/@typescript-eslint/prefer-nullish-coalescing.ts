/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce using the nullish coalescing operator instead of logical chaining
 * @see https://typescript-eslint.io/rules/prefer-nullish-coalescing
 *
 * @minItems 1
 */
export type PreferNullishCoalescing =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreConditionalTests?: boolean;
        ignoreTernaryTests?: boolean;
        ignoreMixedLogicalExpressions?: boolean;
      }
    ];
