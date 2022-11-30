/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow use of `this` in contexts where the value of `this` is `undefined`
 * @see https://eslint.org/docs/rules/no-invalid-this
 *
 * @minItems 1
 */
export type NoInvalidThis =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        capIsConstructor?: boolean;
      }
    ];
