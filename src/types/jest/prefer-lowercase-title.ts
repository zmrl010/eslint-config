/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PreferLowercaseTitle0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignore?: ('describe' | 'test' | 'it')[];
        allowedPrefixes?: string[];
        ignoreTopLevelDescribe?: boolean;
      }
    ];

/**
 * Enforce lowercase test names
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/prefer-lowercase-title.md
 */
export type PreferLowercaseTitle = 'off' | PreferLowercaseTitle0;
