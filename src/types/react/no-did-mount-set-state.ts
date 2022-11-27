/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoDidMountSetState0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'disallow-in-func'];

/**
 * Disallow usage of setState in componentDidMount
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-did-mount-set-state.md
 */
export type NoDidMountSetState = 'off' | NoDidMountSetState0;
