/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoFloatingPromises0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * Whether to ignore `void` expressions.
         */
        ignoreVoid?: boolean;
        /**
         * Whether to ignore async IIFEs (Immediately Invocated Function Expressions).
         */
        ignoreIIFE?: boolean;
      }
    ];

/**
 * Require Promise-like statements to be handled appropriately
 * @see https://typescript-eslint.io/rules/no-floating-promises
 */
export type NoFloatingPromises = 'off' | NoFloatingPromises0;
