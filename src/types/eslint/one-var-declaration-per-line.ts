/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type OneVarDeclarationPerLine0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'initializations'];

/**
 * Require or disallow newlines around variable declarations
 * @see https://eslint.org/docs/rules/one-var-declaration-per-line
 */
export type OneVarDeclarationPerLine = 'off' | OneVarDeclarationPerLine0;
