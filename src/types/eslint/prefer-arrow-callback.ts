/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require using arrow functions for callbacks
 * @see https://eslint.org/docs/rules/prefer-arrow-callback
 *
 * @minItems 1
 */
export type PreferArrowCallback =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowNamedFunctions?: boolean;
        allowUnboundThis?: boolean;
      }
    ];
