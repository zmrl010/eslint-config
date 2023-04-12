/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Forbid importing modules from parent directories.
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-relative-parent-imports.md
 *
 * @minItems 1
 */
export type NoRelativeParentImports =
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
