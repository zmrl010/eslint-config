/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Ensure destructuring and symmetric naming of useState hook value and setter variables
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/hook-use-state.md
 *
 * @minItems 1
 */
export type HookUseState =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowDestructuredState?: boolean;
      }
    ];
