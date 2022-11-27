
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type SelfClosingComp0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        component?: boolean;
        html?: boolean;
      }
    ];

export type SelfClosingComp = 'off' | SelfClosingComp0;
