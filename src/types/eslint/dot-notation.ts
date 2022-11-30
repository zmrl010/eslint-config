/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce dot notation whenever possible
 * @see https://eslint.org/docs/rules/dot-notation
 *
 * @minItems 1
 */
export type DotNotation =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowKeywords?: boolean;
        allowPattern?: string;
      }
    ];
