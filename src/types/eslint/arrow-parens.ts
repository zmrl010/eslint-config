/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ArrowParens0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'as-needed']
  | [
      'off' | 'error' | 'warn',
      'always' | 'as-needed',
      {
        requireForBlockBody?: boolean;
      }
    ];

/**
 * Require parentheses around arrow function arguments
 * @see https://eslint.org/docs/rules/arrow-parens
 */
export type ArrowParens = 'off' | ArrowParens0;
