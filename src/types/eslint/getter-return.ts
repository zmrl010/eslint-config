/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type GetterReturn0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowImplicit?: boolean;
      }
    ];

/**
 * Enforce `return` statements in getters
 * @see https://eslint.org/docs/rules/getter-return
 */
export type GetterReturn = 'off' | GetterReturn0;
