/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoThrowLiteral0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowThrowingAny?: boolean;
        allowThrowingUnknown?: boolean;
      }
    ];

/**
 * Disallow throwing literals as exceptions
 * @see https://typescript-eslint.io/rules/no-throw-literal
 */
export type NoThrowLiteral = 'off' | NoThrowLiteral0;
