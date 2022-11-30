/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require private members to be marked as `readonly` if they're never modified outside of the constructor
 * @see https://typescript-eslint.io/rules/prefer-readonly
 *
 * @minItems 1
 */
export type PreferReadonly =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        onlyInlineLambdas?: boolean;
        [k: string]: unknown | undefined;
      }
    ];
