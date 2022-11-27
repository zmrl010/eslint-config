/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoTabs0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowIndentationTabs?: boolean;
      }
    ];

/**
 * Disallow all tabs
 * @see https://eslint.org/docs/rules/no-tabs
 */
export type NoTabs = 'off' | NoTabs0;
