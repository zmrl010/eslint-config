/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce consistent linebreak style for operators
 * @see https://eslint.org/docs/rules/operator-linebreak
 *
 * @minItems 1
 */
export type OperatorLinebreak =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'after' | 'before' | 'none' | null]
  | [
      'off' | 'error' | 'warn',
      'after' | 'before' | 'none' | null,
      {
        overrides?: {
          [k: string]: ('after' | 'before' | 'none' | 'ignore') | undefined;
        };
      }
    ];
