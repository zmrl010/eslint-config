/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require parentheses around arrow function arguments
 * @see https://eslint.org/docs/rules/arrow-parens
 *
 * @minItems 1
 */
export type ArrowParens =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'as-needed']
  | [
      'off' | 'error' | 'warn',
      'always' | 'as-needed',
      {
        requireForBlockBody?: boolean;
      }
    ];
