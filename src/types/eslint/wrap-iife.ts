/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type WrapIife0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'outside' | 'inside' | 'any']
  | [
      'off' | 'error' | 'warn',
      'outside' | 'inside' | 'any',
      {
        functionPrototypeMethods?: boolean;
      }
    ];

/**
 * Require parentheses around immediate `function` invocations
 * @see https://eslint.org/docs/rules/wrap-iife
 */
export type WrapIife = 'off' | WrapIife0;
