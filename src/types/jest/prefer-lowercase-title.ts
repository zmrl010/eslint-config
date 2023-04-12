/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce lowercase test names
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.2.1/docs/rules/prefer-lowercase-title.md
 *
 * @minItems 1
 */
export type PreferLowercaseTitle =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignore?: ('describe' | 'test' | 'it')[];
        allowedPrefixes?: string[];
        ignoreTopLevelDescribe?: boolean;
      }
    ];
