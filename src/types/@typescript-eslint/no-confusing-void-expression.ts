/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoConfusingVoidExpression0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreArrowShorthand?: boolean;
        ignoreVoidOperator?: boolean;
      }
    ];

/**
 * Require expressions of type void to appear in statement position
 * @see https://typescript-eslint.io/rules/no-confusing-void-expression
 */
export type NoConfusingVoidExpression = 'off' | NoConfusingVoidExpression0;
