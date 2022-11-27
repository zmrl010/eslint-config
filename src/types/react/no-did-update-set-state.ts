/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoDidUpdateSetState0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'disallow-in-func'];

/**
 * Disallow usage of setState in componentDidUpdate
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-did-update-set-state.md
 */
export type NoDidUpdateSetState = 'off' | NoDidUpdateSetState0;
