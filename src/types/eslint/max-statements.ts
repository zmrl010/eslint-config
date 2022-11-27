/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type MaxStatements0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | number
        | {
            maximum?: number;
            max?: number;
          }
      )
    ]
  | [
      'off' | 'error' | 'warn',
      (
        | number
        | {
            maximum?: number;
            max?: number;
          }
      ),
      {
        ignoreTopLevelFunctions?: boolean;
      }
    ];

/**
 * Enforce a maximum number of statements allowed in function blocks
 * @see https://eslint.org/docs/rules/max-statements
 */
export type MaxStatements = 'off' | MaxStatements0;
