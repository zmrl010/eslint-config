
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type BraceStyle0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', '1tbs' | 'stroustrup' | 'allman']
  | [
      'off' | 'error' | 'warn',
      '1tbs' | 'stroustrup' | 'allman',
      {
        allowSingleLine?: boolean;
      }
    ];

export type BraceStyle = 'off' | BraceStyle0;
