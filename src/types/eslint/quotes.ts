/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type Quotes0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'single' | 'double' | 'backtick']
  | [
      'off' | 'error' | 'warn',
      'single' | 'double' | 'backtick',
      (
        | 'avoid-escape'
        | {
            avoidEscape?: boolean;
            allowTemplateLiterals?: boolean;
          }
      )
    ];

/**
 * Enforce the consistent use of either backticks, double, or single quotes
 * @see https://eslint.org/docs/rules/quotes
 */
export type Quotes = 'off' | Quotes0;
