/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce `return` statements in callbacks of array methods
 * @see https://eslint.org/docs/rules/array-callback-return
 *
 * @minItems 1
 */
export type ArrayCallbackReturn =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowImplicit?: boolean;
        checkForEach?: boolean;
      }
    ];
