/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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

/**
 * Disallow variable redeclaration
 * @see https://typescript-eslint.io/rules/no-redeclare
 */
export type NoRedeclare = 'off' | NoRedeclare0;
