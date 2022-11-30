/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow unnecessary parentheses
 * @see https://typescript-eslint.io/rules/no-extra-parens
 */
export type NoExtraParens =
  | 'off'
  | (
      | ['off' | 'error' | 'warn']
      | ['off' | 'error' | 'warn', 'functions']
      | ['off' | 'error' | 'warn']
      | ['off' | 'error' | 'warn', 'all']
      | [
          'off' | 'error' | 'warn',
          'all',
          {
            conditionalAssign?: boolean;
            nestedBinaryExpressions?: boolean;
            returnAssign?: boolean;
            ignoreJSX?: 'none' | 'all' | 'single-line' | 'multi-line';
            enforceForArrowConditionals?: boolean;
            enforceForSequenceExpressions?: boolean;
            enforceForNewInMemberExpressions?: boolean;
            enforceForFunctionPrototypeMethods?: boolean;
          }
        ]
    );
