/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoPrivateProperties0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        private?: string;
        protected?: string;
      }
    ];

/**
 * Disallows usages of "non-public" property bindings
 * @see https://github.com/43081j/eslint-plugin-lit/blob/master/docs/rules/no-private-properties.md
 */
export type NoPrivateProperties = 'off' | NoPrivateProperties0;
