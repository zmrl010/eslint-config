
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type SwitchColonSpacing0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        before?: boolean;
        after?: boolean;
      }
    ];

export type SwitchColonSpacing = 'off' | SwitchColonSpacing0;
