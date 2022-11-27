/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type FuncStyle0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'declaration' | 'expression']
  | [
      'off' | 'error' | 'warn',
      'declaration' | 'expression',
      {
        allowArrowFunctions?: boolean;
      }
    ];

/**
 * Enforce the consistent use of either `function` declarations or expressions
 * @see https://eslint.org/docs/rules/func-style
 */
export type FuncStyle = 'off' | FuncStyle0;
