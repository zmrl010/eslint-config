/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoEmpty0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowEmptyCatch?: boolean;
      }
    ];

/**
 * Disallow empty block statements
 * @see https://eslint.org/docs/rules/no-empty
 */
export type NoEmpty = 'off' | NoEmpty0;
