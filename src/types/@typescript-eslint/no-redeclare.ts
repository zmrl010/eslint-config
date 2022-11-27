
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoRedeclare0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        builtinGlobals?: boolean;
        ignoreDeclarationMerge?: boolean;
      }
    ];

export type NoRedeclare = 'off' | NoRedeclare0;
