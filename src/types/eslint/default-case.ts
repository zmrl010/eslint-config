/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require `default` cases in `switch` statements
 * @see https://eslint.org/docs/rules/default-case
 *
 * @minItems 1
 */
export type DefaultCase =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        commentPattern?: string;
      }
    ];
