/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoBitwise0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allow?: (
          | '^'
          | '|'
          | '&'
          | '<<'
          | '>>'
          | '>>>'
          | '^='
          | '|='
          | '&='
          | '<<='
          | '>>='
          | '>>>='
          | '~'
        )[];
        int32Hint?: boolean;
      }
    ];

/**
 * Disallow bitwise operators
 * @see https://eslint.org/docs/rules/no-bitwise
 */
export type NoBitwise = 'off' | NoBitwise0;
