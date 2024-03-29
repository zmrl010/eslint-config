/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow variable redeclaration
 * @see https://typescript-eslint.io/rules/no-redeclare
 *
 * @minItems 1
 */
export type NoRedeclare =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        builtinGlobals?: boolean;
        ignoreDeclarationMerge?: boolean;
      }
    ];
