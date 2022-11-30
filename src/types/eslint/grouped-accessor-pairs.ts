/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require grouped accessor pairs in object literals and classes
 * @see https://eslint.org/docs/rules/grouped-accessor-pairs
 *
 * @minItems 1
 */
export type GroupedAccessorPairs =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'anyOrder' | 'getBeforeSet' | 'setBeforeGet'];
