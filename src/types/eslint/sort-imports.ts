/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type SortImports0 =
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

/**
 * Enforce sorted import declarations within modules
 * @see https://eslint.org/docs/rules/sort-imports
 */
export type SortImports = 'off' | SortImports0;
