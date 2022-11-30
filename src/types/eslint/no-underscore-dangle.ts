/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type NoUnderscoreDangle =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allow?: string[];
        allowAfterThis?: boolean;
        allowAfterSuper?: boolean;
        allowAfterThisConstructor?: boolean;
        enforceInMethodNames?: boolean;
        allowFunctionParams?: boolean;
        enforceInClassFields?: boolean;
      }
    ];
