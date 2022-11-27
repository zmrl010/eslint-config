
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type NoFloatingPromises = 'off' | NoFloatingPromises0;
