/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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

/**
 * Disallow declarations in the global scope
 * @see https://eslint.org/docs/rules/no-implicit-globals
 */
export type NoImplicitGlobals = 'off' | NoImplicitGlobals0;
