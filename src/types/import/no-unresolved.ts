/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Ensure imports point to a file/module that can be resolved.
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-unresolved.md
 *
 * @minItems 1
 */
export type NoUnresolved =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        commonjs?: boolean;
        amd?: boolean;
        esmodule?: boolean;
        /**
         * @minItems 1
         */
        ignore?: [string, ...string[]];
        caseSensitive?: boolean;
        caseSensitiveStrict?: boolean;
      }
    ];
