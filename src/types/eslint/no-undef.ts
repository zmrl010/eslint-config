/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoUndef0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        typeof?: boolean;
      }
    ];

/**
 * Disallow the use of undeclared variables unless mentioned in `/*global *\/` comments
 * @see https://eslint.org/docs/rules/no-undef
 */
export type NoUndef = 'off' | NoUndef0;
