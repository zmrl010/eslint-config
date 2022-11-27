/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoConfusingArrow0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowParens?: boolean;
        onlyOneSimpleParam?: boolean;
      }
    ];

/**
 * Disallow arrow functions where they could be confused with comparisons
 * @see https://eslint.org/docs/rules/no-confusing-arrow
 */
export type NoConfusingArrow = 'off' | NoConfusingArrow0;
