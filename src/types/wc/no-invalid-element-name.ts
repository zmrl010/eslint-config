/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoInvalidElementName0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        loose?: boolean;
      }
    ];

/**
 * Disallows invalid custom element names
 * @see https://github.com/43081j/eslint-plugin-wc/blob/master/docs/rules/no-invalid-element-name.md
 */
export type NoInvalidElementName = 'off' | NoInvalidElementName0;
