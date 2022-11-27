/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoConstructorReturn0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', unknown];

/**
 * Disallow returning value from constructor
 * @see https://eslint.org/docs/rules/no-constructor-return
 */
export type NoConstructorReturn = 'off' | NoConstructorReturn0;
