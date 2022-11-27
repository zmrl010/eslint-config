/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoInvalidThis0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        capIsConstructor?: boolean;
      }
    ];

/**
 * Disallow use of `this` in contexts where the value of `this` is `undefined`
 * @see https://eslint.org/docs/rules/no-invalid-this
 */
export type NoInvalidThis = 'off' | NoInvalidThis0;
