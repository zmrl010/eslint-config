
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ButtonHasType0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        button?: boolean;
        submit?: boolean;
        reset?: boolean;
      }
    ];

export type ButtonHasType = 'off' | ButtonHasType0;
