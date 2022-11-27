/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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

/**
 * Enforce consistent brace style for blocks
 * @see https://eslint.org/docs/rules/brace-style
 */
export type BraceStyle = 'off' | BraceStyle0;
