/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce a maximum number of statements allowed in function blocks
 * @see https://eslint.org/docs/rules/max-statements
 *
 * @minItems 1
 */
export type MaxStatements =
  | 'off'
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
