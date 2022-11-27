
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoDynamicRequire0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        esmodule?: boolean;
      }
    ];

export type NoDynamicRequire = 'off' | NoDynamicRequire0;
