/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
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
