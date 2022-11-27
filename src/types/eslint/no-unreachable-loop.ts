/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoUnreachableLoop0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignore?: (
          | 'WhileStatement'
          | 'DoWhileStatement'
          | 'ForStatement'
          | 'ForInStatement'
          | 'ForOfStatement'
        )[];
      }
    ];

/**
 * Disallow loops with a body that allows only one iteration
 * @see https://eslint.org/docs/rules/no-unreachable-loop
 */
export type NoUnreachableLoop = 'off' | NoUnreachableLoop0;
