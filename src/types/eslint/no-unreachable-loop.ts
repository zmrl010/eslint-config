/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow loops with a body that allows only one iteration
 * @see https://eslint.org/docs/rules/no-unreachable-loop
 *
 * @minItems 1
 */
export type NoUnreachableLoop =
  | 'off'
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
