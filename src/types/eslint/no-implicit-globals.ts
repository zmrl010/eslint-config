
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoImplicitGlobals0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        lexicalBindings?: boolean;
      }
    ];

export type NoImplicitGlobals = 'off' | NoImplicitGlobals0;
