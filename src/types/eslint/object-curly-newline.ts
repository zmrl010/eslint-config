
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ObjectCurlyNewline0 =
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

export type ObjectCurlyNewline = 'off' | ObjectCurlyNewline0;
