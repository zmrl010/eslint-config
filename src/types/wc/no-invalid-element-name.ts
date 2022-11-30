/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallows invalid custom element names
 * @see https://github.com/43081j/eslint-plugin-wc/blob/master/docs/rules/no-invalid-element-name.md
 *
 * @minItems 1
 */
export type NoInvalidElementName =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        loose?: boolean;
      }
    ];
