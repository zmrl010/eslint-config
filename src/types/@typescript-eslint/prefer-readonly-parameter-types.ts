/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require function parameters to be typed as `readonly` to prevent accidental mutation of inputs
 * @see https://typescript-eslint.io/rules/prefer-readonly-parameter-types
 *
 * @minItems 1
 */
export type PreferReadonlyParameterTypes =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        checkParameterProperties?: boolean;
        ignoreInferredTypes?: boolean;
        treatMethodsAsReadonly?: boolean;
      }
    ];
