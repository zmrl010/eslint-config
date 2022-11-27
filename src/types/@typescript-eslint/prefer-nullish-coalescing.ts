
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type PreferNullishCoalescing = 'off' | PreferNullishCoalescing0;
