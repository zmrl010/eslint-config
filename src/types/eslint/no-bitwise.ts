
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type NoBitwise = 'off' | NoBitwise0;
