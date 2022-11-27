/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type SemiSpacing0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        before?: boolean;
        after?: boolean;
      }
    ];

/**
 * Enforce consistent spacing before and after semicolons
 * @see https://eslint.org/docs/rules/semi-spacing
 */
export type SemiSpacing = 'off' | SemiSpacing0;
