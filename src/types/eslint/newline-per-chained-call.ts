/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require a newline after each call in a method chain
 * @see https://eslint.org/docs/rules/newline-per-chained-call
 *
 * @minItems 1
 */
export type NewlinePerChainedCall =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreChainWithDepth?: number;
      }
    ];
