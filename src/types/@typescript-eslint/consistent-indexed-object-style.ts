/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ConsistentIndexedObjectStyle0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'record' | 'index-signature'];

/**
 * Require or disallow the `Record` type
 * @see https://typescript-eslint.io/rules/consistent-indexed-object-style
 */
export type ConsistentIndexedObjectStyle =
  | 'off'
  | ConsistentIndexedObjectStyle0;
