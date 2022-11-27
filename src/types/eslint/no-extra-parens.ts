
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

type NoExtraParens0 =
  | ['off' | 'error' | 'warn', 'functions']
  | ['off' | 'error' | 'warn', 'functions', unknown]
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
      },
      unknown
    ];

export type NoExtraParens = 'off' | NoExtraParens0;
