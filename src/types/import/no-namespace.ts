/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoNamespace0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignore?: string[];
        [k: string]: unknown | undefined;
      }
    ];

/**
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-namespace.md
 */
export type NoNamespace = 'off' | NoNamespace0;
