/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type MaxLen =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            code?: number;
            comments?: number;
            tabWidth?: number;
            ignorePattern?: string;
            ignoreComments?: boolean;
            ignoreStrings?: boolean;
            ignoreUrls?: boolean;
            ignoreTemplateLiterals?: boolean;
            ignoreRegExpLiterals?: boolean;
            ignoreTrailingComments?: boolean;
          }
        | number
      )
    ]
  | [
      'off' | 'error' | 'warn',
      (
        | {
            code?: number;
            comments?: number;
            tabWidth?: number;
            ignorePattern?: string;
            ignoreComments?: boolean;
            ignoreStrings?: boolean;
            ignoreUrls?: boolean;
            ignoreTemplateLiterals?: boolean;
            ignoreRegExpLiterals?: boolean;
            ignoreTrailingComments?: boolean;
          }
        | number
      ),
      (
        | {
            code?: number;
            comments?: number;
            tabWidth?: number;
            ignorePattern?: string;
            ignoreComments?: boolean;
            ignoreStrings?: boolean;
            ignoreUrls?: boolean;
            ignoreTemplateLiterals?: boolean;
            ignoreRegExpLiterals?: boolean;
            ignoreTrailingComments?: boolean;
          }
        | number
      )
    ]
  | [
      'off' | 'error' | 'warn',
      (
        | {
            code?: number;
            comments?: number;
            tabWidth?: number;
            ignorePattern?: string;
            ignoreComments?: boolean;
            ignoreStrings?: boolean;
            ignoreUrls?: boolean;
            ignoreTemplateLiterals?: boolean;
            ignoreRegExpLiterals?: boolean;
            ignoreTrailingComments?: boolean;
          }
        | number
      ),
      (
        | {
            code?: number;
            comments?: number;
            tabWidth?: number;
            ignorePattern?: string;
            ignoreComments?: boolean;
            ignoreStrings?: boolean;
            ignoreUrls?: boolean;
            ignoreTemplateLiterals?: boolean;
            ignoreRegExpLiterals?: boolean;
            ignoreTrailingComments?: boolean;
          }
        | number
      ),
      {
        code?: number;
        comments?: number;
        tabWidth?: number;
        ignorePattern?: string;
        ignoreComments?: boolean;
        ignoreStrings?: boolean;
        ignoreUrls?: boolean;
        ignoreTemplateLiterals?: boolean;
        ignoreRegExpLiterals?: boolean;
        ignoreTrailingComments?: boolean;
      }
    ];
