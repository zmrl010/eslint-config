
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type MaxClassesPerFile0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | number
        | {
            ignoreExpressions?: boolean;
            max?: number;
          }
      )
    ];

export type MaxClassesPerFile = 'off' | MaxClassesPerFile0;
