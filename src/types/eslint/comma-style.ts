/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce consistent comma style
 * @see https://eslint.org/docs/rules/comma-style
 *
 * @minItems 1
 */
export type CommaStyle =
  | 'off'
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
