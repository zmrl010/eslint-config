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
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/unbound-method.md
 */
export type UnboundMethod = 'off' | UnboundMethod0;
