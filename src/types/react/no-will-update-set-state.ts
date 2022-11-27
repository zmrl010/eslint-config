/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoWillUpdateSetState0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'disallow-in-func'];

/**
 * Disallow usage of setState in componentWillUpdate
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-will-update-set-state.md
 */
export type NoWillUpdateSetState = 'off' | NoWillUpdateSetState0;
