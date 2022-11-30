/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce a maximum number of statements allowed per line
 * @see https://eslint.org/docs/rules/max-statements-per-line
 *
 * @minItems 1
 */
export type MaxStatementsPerLine =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        max?: number;
      }
    ];
