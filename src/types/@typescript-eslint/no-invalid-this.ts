/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow `this` keywords outside of classes or class-like objects
 * @see https://typescript-eslint.io/rules/no-invalid-this
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
