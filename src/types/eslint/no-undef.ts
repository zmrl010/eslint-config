/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow the use of undeclared variables unless mentioned in `/*global * /` comments
 * @see https://eslint.org/docs/rules/no-undef
 *
 * @minItems 1
 */
export type NoUndef =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        typeof?: boolean;
      }
    ];
