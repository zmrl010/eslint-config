/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ReturnAwait0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'in-try-catch' | 'always' | 'never'];

/**
 * Enforce consistent returning of awaited values
 * @see https://typescript-eslint.io/rules/return-await
 */
export type ReturnAwait = 'off' | ReturnAwait0;
