/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-absolute-path.md
 *
 * @minItems 1
 */
export type NoAbsolutePath =
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
      }
    ];
