
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoMixedSpacesAndTabs0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'smart-tabs' | true | false];

export type NoMixedSpacesAndTabs = 'off' | NoMixedSpacesAndTabs0;
