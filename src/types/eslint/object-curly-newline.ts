/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce consistent line breaks after opening and before closing braces
 * @see https://eslint.org/docs/rules/object-curly-newline
 *
 * @minItems 1
 */
export type ObjectCurlyNewline =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | (
            | ('always' | 'never')
            | {
                multiline?: boolean;
                minProperties?: number;
                consistent?: boolean;
              }
          )
        | {
            ObjectExpression?:
              | ('always' | 'never')
              | {
                  multiline?: boolean;
                  minProperties?: number;
                  consistent?: boolean;
                };
            ObjectPattern?:
              | ('always' | 'never')
              | {
                  multiline?: boolean;
                  minProperties?: number;
                  consistent?: boolean;
                };
            ImportDeclaration?:
              | ('always' | 'never')
              | {
                  multiline?: boolean;
                  minProperties?: number;
                  consistent?: boolean;
                };
            ExportDeclaration?:
              | ('always' | 'never')
              | {
                  multiline?: boolean;
                  minProperties?: number;
                  consistent?: boolean;
                };
          }
      )
    ];
