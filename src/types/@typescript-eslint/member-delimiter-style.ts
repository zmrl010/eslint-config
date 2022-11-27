
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type MemberDelimiterStyle0 =
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

export type MemberDelimiterStyle = 'off' | MemberDelimiterStyle0;
