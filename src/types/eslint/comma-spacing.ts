/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce consistent spacing before and after commas
 * @see https://eslint.org/docs/rules/comma-spacing
 *
 * @minItems 1
 */
export type CommaSpacing =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        before?: boolean;
        after?: boolean;
      }
    ];
