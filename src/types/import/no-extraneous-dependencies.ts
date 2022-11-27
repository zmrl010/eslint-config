/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoExtraneousDependencies0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        devDependencies?: boolean | unknown[];
        optionalDependencies?: boolean | unknown[];
        peerDependencies?: boolean | unknown[];
        bundledDependencies?: boolean | unknown[];
        packageDir?: string | unknown[];
      }
    ];

/**
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-extraneous-dependencies.md
 */
export type NoExtraneousDependencies = 'off' | NoExtraneousDependencies0;
