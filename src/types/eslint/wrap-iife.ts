/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type WrapIife =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'outside' | 'inside' | 'any']
  | [
      'off' | 'error' | 'warn',
      'outside' | 'inside' | 'any',
      {
        functionPrototypeMethods?: boolean;
      }
    ];
