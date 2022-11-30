/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require or disallow logical assignment logical operator shorthand
 * @see https://eslint.org/docs/rules/logical-assignment-operators
 *
 * @minItems 1
 */
export type LogicalAssignmentOperators =
  | 'off'
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
