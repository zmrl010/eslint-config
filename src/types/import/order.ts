/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
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
          [k: string]: unknown | undefined;
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
