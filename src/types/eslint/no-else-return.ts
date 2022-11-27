/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoElseReturn0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowElseIf?: boolean;
      }
    ];

/**
 * Disallow `else` blocks after `return` statements in `if` statements
 * @see https://eslint.org/docs/rules/no-else-return
 */
export type NoElseReturn = 'off' | NoElseReturn0;
