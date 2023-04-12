/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce which files can be imported in a given folder.
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-restricted-paths.md
 *
 * @minItems 1
 */
export type NoRestrictedPaths =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * @minItems 1
         */
        zones?: [
          {
            target?: string | string[];
            from?: string | string[];
            except?: string[];
            message?: string;
          },
          ...{
            target?: string | string[];
            from?: string | string[];
            except?: string[];
            message?: string;
          }[]
        ];
        basePath?: string;
      }
    ];
