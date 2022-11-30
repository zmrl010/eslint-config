/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require all enum members to be literal values
 * @see https://typescript-eslint.io/rules/prefer-literal-enum-member
 *
 * @minItems 1
 */
export type PreferLiteralEnumMember =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowBitwiseExpressions?: boolean;
      }
    ];
