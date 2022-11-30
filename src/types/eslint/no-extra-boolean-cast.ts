/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow unnecessary boolean casts
 * @see https://eslint.org/docs/rules/no-extra-boolean-cast
 *
 * @minItems 1
 */
export type NoExtraBooleanCast =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        enforceForLogicalOperands?: boolean;
      }
    ];
