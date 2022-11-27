/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoExtraBooleanCast0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        enforceForLogicalOperands?: boolean;
      }
    ];

/**
 * Disallow unnecessary boolean casts
 * @see https://eslint.org/docs/rules/no-extra-boolean-cast
 */
export type NoExtraBooleanCast = 'off' | NoExtraBooleanCast0;
