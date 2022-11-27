/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type MaxDepth0 =
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
 * Enforce a maximum depth that blocks can be nested
 * @see https://eslint.org/docs/rules/max-depth
 */
export type MaxDepth = 'off' | MaxDepth0;
