/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type MaxNestedCallbacks0 =
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
 * Enforce a maximum depth that callbacks can be nested
 * @see https://eslint.org/docs/rules/max-nested-callbacks
 */
export type MaxNestedCallbacks = 'off' | MaxNestedCallbacks0;
