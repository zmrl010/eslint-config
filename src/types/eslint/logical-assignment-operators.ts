/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type LogicalAssignmentOperators0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | []
        | ['always']
        | [
            'always',
            {
              enforceForIfStatements?: boolean;
            }
          ]
        | ['never']
      ) &
        unknown[]
    ];

/**
 * Require or disallow logical assignment logical operator shorthand
 * @see https://eslint.org/docs/rules/logical-assignment-operators
 */
export type LogicalAssignmentOperators = 'off' | LogicalAssignmentOperators0;
