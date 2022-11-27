/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ConsistentReturn0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        treatUndefinedAsUnspecified?: boolean;
      }
    ];

/**
 * Require `return` statements to either always or never specify values
 * @see https://eslint.org/docs/rules/consistent-return
 */
export type ConsistentReturn = 'off' | ConsistentReturn0;
