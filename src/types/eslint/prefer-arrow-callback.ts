
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PreferArrowCallback0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowNamedFunctions?: boolean;
        allowUnboundThis?: boolean;
      }
    ];

export type PreferArrowCallback = 'off' | PreferArrowCallback0;
