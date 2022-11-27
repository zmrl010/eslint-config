/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type Complexity0 =
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
    ];

/**
 * Enforce a maximum cyclomatic complexity allowed in a program
 * @see https://eslint.org/docs/rules/complexity
 */
export type Complexity = 'off' | Complexity0;
