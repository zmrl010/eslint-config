
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PreferConst0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        destructuring?: 'any' | 'all';
        ignoreReadBeforeAssign?: boolean;
      }
    ];

export type PreferConst = 'off' | PreferConst0;
