
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type NoConfusingArrow = 'off' | NoConfusingArrow0;
