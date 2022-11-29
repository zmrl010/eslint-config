/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PreferReadonly0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        onlyInlineLambdas?: boolean;
        [k: string]: unknown | undefined;
      }
    ];

/**
 * Require private members to be marked as `readonly` if they're never modified outside of the constructor
 * @see https://typescript-eslint.io/rules/prefer-readonly
 */
export type PreferReadonly = 'off' | PreferReadonly0;
