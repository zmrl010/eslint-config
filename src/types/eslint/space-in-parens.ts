/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce consistent spacing inside parentheses
 * @see https://eslint.org/docs/rules/space-in-parens
 *
 * @minItems 1
 */
export type SpaceInParens =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never']
  | [
      'off' | 'error' | 'warn',
      'always' | 'never',
      {
        exceptions?: ('{}' | '[]' | '()' | 'empty')[];
      }
    ];
