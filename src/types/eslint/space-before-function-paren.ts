/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type SpaceBeforeFunctionParen0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | ('always' | 'never')
        | {
            anonymous?: 'always' | 'never' | 'ignore';
            named?: 'always' | 'never' | 'ignore';
            asyncArrow?: 'always' | 'never' | 'ignore';
          }
      )
    ];

/**
 * Enforce consistent spacing before `function` definition opening parenthesis
 * @see https://eslint.org/docs/rules/space-before-function-paren
 */
export type SpaceBeforeFunctionParen = 'off' | SpaceBeforeFunctionParen0;
