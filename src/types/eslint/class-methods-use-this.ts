/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce that class methods utilize `this`
 * @see https://eslint.org/docs/rules/class-methods-use-this
 *
 * @minItems 1
 */
export type ClassMethodsUseThis =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        exceptMethods?: string[];
        enforceForClassFields?: boolean;
      }
    ];
