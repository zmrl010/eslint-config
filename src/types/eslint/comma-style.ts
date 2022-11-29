/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type CommaStyle0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'first' | 'last']
  | [
      'off' | 'error' | 'warn',
      'first' | 'last',
      {
        exceptions?: {
          [k: string]: boolean | undefined;
        };
      }
    ];

/**
 * Enforce consistent comma style
 * @see https://eslint.org/docs/rules/comma-style
 */
export type CommaStyle = 'off' | CommaStyle0;
