
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type MaxNestedCallbacks = 'off' | MaxNestedCallbacks0;
