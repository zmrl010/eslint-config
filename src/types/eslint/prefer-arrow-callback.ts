/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PreferArrowCallback0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowNamedFunctions?: boolean;
        allowUnboundThis?: boolean;
      }
    ];

/**
 * Require using arrow functions for callbacks
 * @see https://eslint.org/docs/rules/prefer-arrow-callback
 */
export type PreferArrowCallback = 'off' | PreferArrowCallback0;
