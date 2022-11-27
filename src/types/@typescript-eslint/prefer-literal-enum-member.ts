/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PreferLiteralEnumMember0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowBitwiseExpressions?: boolean;
      }
    ];

/**
 * Require all enum members to be literal values
 * @see https://typescript-eslint.io/rules/prefer-literal-enum-member
 */
export type PreferLiteralEnumMember = 'off' | PreferLiteralEnumMember0;
