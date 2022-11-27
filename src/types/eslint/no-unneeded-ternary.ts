/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoUnneededTernary0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        defaultAssignment?: boolean;
      }
    ];

/**
 * Disallow ternary operators when simpler alternatives exist
 * @see https://eslint.org/docs/rules/no-unneeded-ternary
 */
export type NoUnneededTernary = 'off' | NoUnneededTernary0;
