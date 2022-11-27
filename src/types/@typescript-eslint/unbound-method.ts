
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type UnboundMethod0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * Whether to skip checking whether `static` methods are correctly bound.
         */
        ignoreStatic?: boolean;
      }
    ];

export type UnboundMethod = 'off' | UnboundMethod0;
