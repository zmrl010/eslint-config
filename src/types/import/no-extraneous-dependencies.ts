/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Forbid the use of extraneous packages.
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-extraneous-dependencies.md
 *
 * @minItems 1
 */
export type NoExtraneousDependencies =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        devDependencies?: boolean | unknown[];
        optionalDependencies?: boolean | unknown[];
        peerDependencies?: boolean | unknown[];
        bundledDependencies?: boolean | unknown[];
        packageDir?: string | unknown[];
        includeInternal?: boolean;
        includeTypes?: boolean;
      }
    ];
