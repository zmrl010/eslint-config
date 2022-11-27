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
 * Disallow `this` keywords outside of classes or class-like objects
 * @see https://typescript-eslint.io/rules/no-invalid-this
 */
export type NoInvalidThis = 'off' | NoInvalidThis0;
