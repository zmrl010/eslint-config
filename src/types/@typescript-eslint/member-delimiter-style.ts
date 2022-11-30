/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require a specific member delimiter style for interfaces and type literals
 * @see https://typescript-eslint.io/rules/member-delimiter-style
 *
 * @minItems 1
 */
export type MemberDelimiterStyle =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        multiline?: {
          delimiter?: 'none' | 'semi' | 'comma';
          requireLast?: boolean;
        };
        singleline?: {
          delimiter?: 'semi' | 'comma';
          requireLast?: boolean;
        };
        overrides?: {
          interface?: {
            multiline?: {
              delimiter?: 'none' | 'semi' | 'comma';
              requireLast?: boolean;
            };
            singleline?: {
              delimiter?: 'semi' | 'comma';
              requireLast?: boolean;
            };
          };
          typeLiteral?: {
            multiline?: {
              delimiter?: 'none' | 'semi' | 'comma';
              requireLast?: boolean;
            };
            singleline?: {
              delimiter?: 'semi' | 'comma';
              requireLast?: boolean;
            };
          };
        };
        multilineDetection?: 'brackets' | 'last-member';
      }
    ];
