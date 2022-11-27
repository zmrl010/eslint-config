
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ClassMethodsUseThis0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        exceptMethods?: string[];
        enforceForClassFields?: boolean;
      }
    ];

export type ClassMethodsUseThis = 'off' | ClassMethodsUseThis0;
