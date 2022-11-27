/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoEval0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowIndirect?: boolean;
      }
    ];

/**
 * Disallow the use of `eval()`
 * @see https://eslint.org/docs/rules/no-eval
 */
export type NoEval = 'off' | NoEval0;
