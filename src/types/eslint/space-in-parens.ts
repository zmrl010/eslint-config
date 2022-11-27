/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type SpaceInParens0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never']
  | [
      'off' | 'error' | 'warn',
      'always' | 'never',
      {
        exceptions?: ('{}' | '[]' | '()' | 'empty')[];
      }
    ];

/**
 * Enforce consistent spacing inside parentheses
 * @see https://eslint.org/docs/rules/space-in-parens
 */
export type SpaceInParens = 'off' | SpaceInParens0;
