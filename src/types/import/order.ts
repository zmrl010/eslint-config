/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce a convention in module import order.
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/order.md
 *
 * @minItems 1
 */
export type Order =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        groups?: unknown[];
        pathGroupsExcludedImportTypes?: unknown[];
        distinctGroup?: boolean;
        pathGroups?: {
          pattern: string;
          patternOptions?: {
            [k: string]: unknown | undefined;
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
        }[];
        'newlines-between'?:
          | 'ignore'
          | 'always'
          | 'always-and-inside-groups'
          | 'never';
        alphabetize?: {
          caseInsensitive?: boolean;
          order?: 'ignore' | 'asc' | 'desc';
          orderImportKind?: 'ignore' | 'asc' | 'desc';
        };
        warnOnUnassignedImports?: boolean;
      }
    ];
