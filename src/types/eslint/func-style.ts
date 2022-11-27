
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type FuncStyle0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'declaration' | 'expression']
  | [
      'off' | 'error' | 'warn',
      'declaration' | 'expression',
      {
        allowArrowFunctions?: boolean;
      }
    ];

export type FuncStyle = 'off' | FuncStyle0;
