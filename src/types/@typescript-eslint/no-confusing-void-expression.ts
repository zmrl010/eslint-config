
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type NoConfusingVoidExpression = 'off' | NoConfusingVoidExpression0;
