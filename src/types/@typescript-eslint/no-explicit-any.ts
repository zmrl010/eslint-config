/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow the `any` type
 * @see https://typescript-eslint.io/rules/no-explicit-any
 *
 * @minItems 1
 */
export type NoExplicitAny =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * Whether to enable auto-fixing in which the `any` type is converted to the `unknown` type.
         */
        fixToUnknown?: boolean;
        /**
         * Whether to ignore rest parameter arrays.
         */
        ignoreRestArgs?: boolean;
      }
    ];
