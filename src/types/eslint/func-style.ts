/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce the consistent use of either `function` declarations or expressions
 * @see https://eslint.org/docs/rules/func-style
 *
 * @minItems 1
 */
export type FuncStyle =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'declaration' | 'expression']
  | [
      'off' | 'error' | 'warn',
      'declaration' | 'expression',
      {
        allowArrowFunctions?: boolean;
      }
    ];
