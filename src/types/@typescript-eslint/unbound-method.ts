/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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

/**
 * Enforce unbound methods are called with their expected scope
 * @see https://typescript-eslint.io/rules/unbound-method
 */
export type UnboundMethod = 'off' | UnboundMethod0;
