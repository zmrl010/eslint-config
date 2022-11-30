/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow creating unstable components inside components
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unstable-nested-components.md
 *
 * @minItems 1
 */
export type NoUnstableNestedComponents =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        customValidators?: string[];
        allowAsProps?: boolean;
      }
    ];
