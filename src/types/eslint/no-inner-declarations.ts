/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow variable or `function` declarations in nested blocks
 * @see https://eslint.org/docs/rules/no-inner-declarations
 *
 * @minItems 1
 */
export type NoInnerDeclarations =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'functions' | 'both'];
