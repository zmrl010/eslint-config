/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ArrowSpacing0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        before?: boolean;
        after?: boolean;
      }
    ];

/**
 * Enforce consistent spacing before and after the arrow in arrow functions
 * @see https://eslint.org/docs/rules/arrow-spacing
 */
export type ArrowSpacing = 'off' | ArrowSpacing0;
