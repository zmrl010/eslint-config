/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce the consistent use of either backticks, double, or single quotes
 * @see https://eslint.org/docs/rules/quotes
 *
 * @minItems 1
 */
export type Quotes =
  | 'off'
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
