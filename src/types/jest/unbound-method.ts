/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce unbound methods are called with their expected scope
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.2.1/docs/rules/unbound-method.md
 *
 * @minItems 1
 */
export type UnboundMethod =
  | 'off'
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
