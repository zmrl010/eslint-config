
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type NoUnreachableLoop = 'off' | NoUnreachableLoop0;
