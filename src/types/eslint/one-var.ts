
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type OneVar0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | ('always' | 'never' | 'consecutive')
        | {
            separateRequires?: boolean;
            var?: 'always' | 'never' | 'consecutive';
            let?: 'always' | 'never' | 'consecutive';
            const?: 'always' | 'never' | 'consecutive';
          }
        | {
            initialized?: 'always' | 'never' | 'consecutive';
            uninitialized?: 'always' | 'never' | 'consecutive';
          }
      )
    ];

export type OneVar = 'off' | OneVar0;
