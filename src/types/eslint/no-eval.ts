/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow the use of `eval()`
 * @see https://eslint.org/docs/rules/no-eval
 *
 * @minItems 1
 */
export type NoEval =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowIndirect?: boolean;
      }
    ];
