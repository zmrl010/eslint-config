
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ExplicitFunctionReturnType0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * Whether to allow arrow functions that start with the `void` keyword.
         */
        allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean;
        /**
         * Whether to ignore function expressions (functions which are not part of a declaration).
         */
        allowExpressions?: boolean;
        /**
         * Whether to ignore functions immediately returning another function expression.
         */
        allowHigherOrderFunctions?: boolean;
        /**
         * Whether to ignore type annotations on the variable of function expressions.
         */
        allowTypedFunctionExpressions?: boolean;
        /**
         * Whether to ignore arrow functions immediately returning a `as const` value.
         */
        allowDirectConstAssertionInArrowFunctions?: boolean;
        /**
         * An array of function/method names that will not have their arguments or return values checked.
         */
        allowedNames?: string[];
      }
    ];

export type ExplicitFunctionReturnType = 'off' | ExplicitFunctionReturnType0;
