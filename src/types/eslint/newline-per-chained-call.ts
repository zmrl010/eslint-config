/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NewlinePerChainedCall0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreChainWithDepth?: number;
      }
    ];

/**
 * Require a newline after each call in a method chain
 * @see https://eslint.org/docs/rules/newline-per-chained-call
 */
export type NewlinePerChainedCall = 'off' | NewlinePerChainedCall0;
