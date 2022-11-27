/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type DefaultCase0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        commentPattern?: string;
      }
    ];

/**
 * Require `default` cases in `switch` statements
 * @see https://eslint.org/docs/rules/default-case
 */
export type DefaultCase = 'off' | DefaultCase0;
