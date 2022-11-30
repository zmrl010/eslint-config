/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type BraceStyle =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', '1tbs' | 'stroustrup' | 'allman']
  | [
      'off' | 'error' | 'warn',
      '1tbs' | 'stroustrup' | 'allman',
      {
        allowSingleLine?: boolean;
      }
    ];
