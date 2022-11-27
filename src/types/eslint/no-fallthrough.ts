/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoFallthrough0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        commentPattern?: string;
        allowEmptyCase?: boolean;
      }
    ];

/**
 * Disallow fallthrough of `case` statements
 * @see https://eslint.org/docs/rules/no-fallthrough
 */
export type NoFallthrough = 'off' | NoFallthrough0;
