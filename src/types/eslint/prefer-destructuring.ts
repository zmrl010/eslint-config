/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type PreferDestructuring =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            VariableDeclarator?: {
              array?: boolean;
              object?: boolean;
            };
            AssignmentExpression?: {
              array?: boolean;
              object?: boolean;
            };
          }
        | {
            array?: boolean;
            object?: boolean;
          }
      )
    ]
  | [
      'off' | 'error' | 'warn',
      (
        | {
            VariableDeclarator?: {
              array?: boolean;
              object?: boolean;
            };
            AssignmentExpression?: {
              array?: boolean;
              object?: boolean;
            };
          }
        | {
            array?: boolean;
            object?: boolean;
          }
      ),
      {
        enforceForRenamedProperties?: boolean;
      }
    ];
