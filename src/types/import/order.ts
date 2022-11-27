/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type Order0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        groups?: unknown[];
        pathGroupsExcludedImportTypes?: unknown[];
        pathGroups?: {
          pattern: string;
          patternOptions?: {
            [k: string]: unknown;
          };
          group:
            | 'builtin'
            | 'external'
            | 'internal'
            | 'unknown'
            | 'parent'
            | 'sibling'
            | 'index'
            | 'object'
            | 'type';
          position?: 'after' | 'before';
          [k: string]: unknown;
        }[];
        'newlines-between'?:
          | 'ignore'
          | 'always'
          | 'always-and-inside-groups'
          | 'never';
        alphabetize?: {
          caseInsensitive?: boolean;
          order?: 'ignore' | 'asc' | 'desc';
        };
        warnOnUnassignedImports?: boolean;
      }
    ];

/**
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/order.md
 */
export type Order = 'off' | Order0;
