/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type GroupedAccessorPairs0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'anyOrder' | 'getBeforeSet' | 'setBeforeGet'];

/**
 * Require grouped accessor pairs in object literals and classes
 * @see https://eslint.org/docs/rules/grouped-accessor-pairs
 */
export type GroupedAccessorPairs = 'off' | GroupedAccessorPairs0;
