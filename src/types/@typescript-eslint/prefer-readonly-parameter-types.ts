/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PreferReadonlyParameterTypes0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        checkParameterProperties?: boolean;
        ignoreInferredTypes?: boolean;
        treatMethodsAsReadonly?: boolean;
      }
    ];

/**
 * Require function parameters to be typed as `readonly` to prevent accidental mutation of inputs
 * @see https://typescript-eslint.io/rules/prefer-readonly-parameter-types
 */
export type PreferReadonlyParameterTypes =
  | 'off'
  | PreferReadonlyParameterTypes0;
