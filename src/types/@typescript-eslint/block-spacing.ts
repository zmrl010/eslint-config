/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow or enforce spaces inside of blocks after opening block and before closing block
 * @see https://typescript-eslint.io/rules/block-spacing
 *
 * @minItems 1
 */
export type BlockSpacing =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never'];
