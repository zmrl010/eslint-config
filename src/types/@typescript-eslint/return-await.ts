/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce consistent returning of awaited values
 * @see https://typescript-eslint.io/rules/return-await
 *
 * @minItems 1
 */
export type ReturnAwait =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'in-try-catch' | 'always' | 'never'];
