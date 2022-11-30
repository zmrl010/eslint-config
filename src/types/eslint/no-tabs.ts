/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow all tabs
 * @see https://eslint.org/docs/rules/no-tabs
 *
 * @minItems 1
 */
export type NoTabs =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowIndentationTabs?: boolean;
      }
    ];
