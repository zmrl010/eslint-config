
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type LogicalAssignmentOperators = 'off' | LogicalAssignmentOperators0;
