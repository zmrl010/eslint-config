
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PromiseFunctionAsync0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * Whether to consider `any` and `unknown` to be Promises.
         */
        allowAny?: boolean;
        /**
         * Any extra names of classes or interfaces to be considered Promises.
         */
        allowedPromiseNames?: string[];
        checkArrowFunctions?: boolean;
        checkFunctionDeclarations?: boolean;
        checkFunctionExpressions?: boolean;
        checkMethodDeclarations?: boolean;
      }
    ];

export type PromiseFunctionAsync = 'off' | PromiseFunctionAsync0;
