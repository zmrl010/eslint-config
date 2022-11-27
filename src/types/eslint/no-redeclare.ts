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
      }
    ];

/**
 * Disallow variable redeclaration
 * @see https://eslint.org/docs/rules/no-redeclare
 */
export type NoRedeclare = 'off' | NoRedeclare0;
