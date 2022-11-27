/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type MaxStatementsPerLine0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        max?: number;
      }
    ];

/**
 * Enforce a maximum number of statements allowed per line
 * @see https://eslint.org/docs/rules/max-statements-per-line
 */
export type MaxStatementsPerLine = 'off' | MaxStatementsPerLine0;
