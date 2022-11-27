/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type CommaSpacing0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        before?: boolean;
        after?: boolean;
      }
    ];

/**
 * Enforce consistent spacing before and after commas
 * @see https://typescript-eslint.io/rules/comma-spacing
 */
export type CommaSpacing = 'off' | CommaSpacing0;
