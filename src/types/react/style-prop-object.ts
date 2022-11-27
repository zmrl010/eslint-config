
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type StylePropObject0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allow?: string[];
        [k: string]: unknown;
      }
    ];

export type StylePropObject = 'off' | StylePropObject0;
