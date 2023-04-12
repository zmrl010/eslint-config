/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Forbid Node.js builtin modules.
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-nodejs-modules.md
 *
 * @minItems 1
 */
export type NoNodejsModules =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allow?: string[];
      }
    ];
