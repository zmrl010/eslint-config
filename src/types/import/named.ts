/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Ensure named imports correspond to a named export in the remote file.
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/named.md
 *
 * @minItems 1
 */
export type Named =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        commonjs?: boolean;
      }
    ];
