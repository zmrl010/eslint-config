/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce a leading comment with the webpackChunkName for dynamic imports.
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/dynamic-import-chunkname.md
 *
 * @minItems 1
 */
export type DynamicImportChunkname =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        importFunctions?: string[];
        webpackChunknameFormat?: string;
        [k: string]: unknown | undefined;
      }
    ];
