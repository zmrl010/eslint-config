/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow usage of setState in componentWillUpdate
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-will-update-set-state.md
 *
 * @minItems 1
 */
export type NoWillUpdateSetState =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'disallow-in-func'];
