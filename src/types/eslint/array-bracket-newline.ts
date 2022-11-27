/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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

/**
 * Enforce linebreaks after opening and before closing array brackets
 * @see https://eslint.org/docs/rules/array-bracket-newline
 */
export type ArrayBracketNewline = 'off' | ArrayBracketNewline0;
