/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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

/**
 * Enforce that class methods utilize `this`
 * @see https://eslint.org/docs/rules/class-methods-use-this
 */
export type ClassMethodsUseThis = 'off' | ClassMethodsUseThis0;
