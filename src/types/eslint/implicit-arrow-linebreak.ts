/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ImplicitArrowLinebreak0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'beside' | 'below'];

/**
 * Enforce the location of arrow function bodies
 * @see https://eslint.org/docs/rules/implicit-arrow-linebreak
 */
export type ImplicitArrowLinebreak = 'off' | ImplicitArrowLinebreak0;
