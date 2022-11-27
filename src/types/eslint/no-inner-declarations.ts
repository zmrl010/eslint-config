/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoInnerDeclarations0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'functions' | 'both'];

/**
 * Disallow variable or `function` declarations in nested blocks
 * @see https://eslint.org/docs/rules/no-inner-declarations
 */
export type NoInnerDeclarations = 'off' | NoInnerDeclarations0;
