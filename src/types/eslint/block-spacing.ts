/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type BlockSpacing0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never'];

/**
 * Disallow or enforce spaces inside of blocks after opening block and before closing block
 * @see https://eslint.org/docs/rules/block-spacing
 */
export type BlockSpacing = 'off' | BlockSpacing0;
