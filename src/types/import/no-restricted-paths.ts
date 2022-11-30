/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-restricted-paths.md
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
            target?: string;
            from?: string;
            except?: string[];
            message?: string;
          },
          ...{
            target?: string;
            from?: string;
            except?: string[];
            message?: string;
          }[]
        ];
        basePath?: string;
      }
    ];
