
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type NoExplicitAny = 'off' | NoExplicitAny0;
