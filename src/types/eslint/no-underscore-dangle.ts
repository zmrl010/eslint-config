
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoUnderscoreDangle0 =
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

export type NoUnderscoreDangle = 'off' | NoUnderscoreDangle0;
