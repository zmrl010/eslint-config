
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type PreferReadonlyParameterTypes =
  | 'off'
  | PreferReadonlyParameterTypes0;
