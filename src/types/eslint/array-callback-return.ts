/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ArrayCallbackReturn0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowImplicit?: boolean;
        checkForEach?: boolean;
      }
    ];

/**
 * Enforce `return` statements in callbacks of array methods
 * @see https://eslint.org/docs/rules/array-callback-return
 */
export type ArrayCallbackReturn = 'off' | ArrayCallbackReturn0;
