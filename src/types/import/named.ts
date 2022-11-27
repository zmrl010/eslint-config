/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type Named0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        commonjs?: boolean;
      }
    ];

/**
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/named.md
 */
export type Named = 'off' | Named0;
