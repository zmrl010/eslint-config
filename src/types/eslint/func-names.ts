/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type FuncNames =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', Value]
  | [
      'off' | 'error' | 'warn',
      Value,
      {
        generators?: Value;
      }
    ];
export type Value = 'always' | 'as-needed' | 'never';
