/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoExplicitAny0 =
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

/**
 * Disallow the `any` type
 * @see https://typescript-eslint.io/rules/no-explicit-any
 */
export type NoExplicitAny = 'off' | NoExplicitAny0;
