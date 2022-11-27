/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type DotNotation0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowKeywords?: boolean;
        allowPattern?: string;
      }
    ];

/**
 * Enforce dot notation whenever possible
 * @see https://eslint.org/docs/rules/dot-notation
 */
export type DotNotation = 'off' | DotNotation0;
