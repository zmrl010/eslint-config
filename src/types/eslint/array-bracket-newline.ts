
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ArrayBracketNewline0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | ('always' | 'never' | 'consistent')
        | {
            multiline?: boolean;
            minItems?: number | null;
          }
      )
    ];

export type ArrayBracketNewline = 'off' | ArrayBracketNewline0;
