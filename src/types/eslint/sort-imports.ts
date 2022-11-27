
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type SortImports = 'off' | SortImports0;
