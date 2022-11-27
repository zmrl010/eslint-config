/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoVoid0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowAsStatement?: boolean;
      }
    ];

/**
 * Disallow `void` operators
 * @see https://eslint.org/docs/rules/no-void
 */
export type NoVoid = 'off' | NoVoid0;
