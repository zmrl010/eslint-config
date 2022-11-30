/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce sorted import declarations within modules
 * @see https://eslint.org/docs/rules/sort-imports
 *
 * @minItems 1
 */
export type SortImports =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreCase?: boolean;
        /**
         * @minItems 4
         * @maxItems 4
         */
        memberSyntaxSortOrder?: [
          'none' | 'all' | 'multiple' | 'single',
          'none' | 'all' | 'multiple' | 'single',
          'none' | 'all' | 'multiple' | 'single',
          'none' | 'all' | 'multiple' | 'single'
        ];
        ignoreDeclarationSort?: boolean;
        ignoreMemberSort?: boolean;
        allowSeparatedGroups?: boolean;
      }
    ];
