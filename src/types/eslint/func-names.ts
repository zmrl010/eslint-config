
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type FuncNames0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', Value]
  | [
      'off' | 'error' | 'warn',
      Value,
      {
        generators?: Value;
      }
    ];
type Value = 'always' | 'as-needed' | 'never';

export type FuncNames = 'off' | FuncNames0;
