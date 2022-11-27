/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PreferDestructuring0 =
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

/**
 * Require destructuring from arrays and/or objects
 * @see https://eslint.org/docs/rules/prefer-destructuring
 */
export type PreferDestructuring = 'off' | PreferDestructuring0;
